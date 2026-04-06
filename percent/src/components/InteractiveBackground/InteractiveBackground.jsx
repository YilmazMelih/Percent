
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './InteractiveBackground.css';

const modules = import.meta.glob('../../assets/images/percent visual system/*.svg', { eager: true });
const images = Object.values(modules).map((module) => module.default);

const InteractiveBackground = ({ heroRect }) => {
    const particlesRef = useRef([]);
    const [, setTick] = useState(0); // Used to force re-renders
    const mousePos = useRef({ x: -1000, y: -1000 });
    const location = useLocation();

    // Initialize particles
    useEffect(() => {
        const newParticles = [];
        const minDist = 200;
        const maxAttempts = 100;

        images.forEach(() => {
            let newParticle;
            let validPosition = false;
            let attempts = 0;

            while (!validPosition && attempts < maxAttempts) {
                newParticle = {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: 0,
                    vy: 0,
                    radius: 100, // half of image width
                };

                let overlaps = false;
                for (const p of newParticles) {
                    const dx = newParticle.x - p.x;
                    const dy = newParticle.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < minDist) {
                        overlaps = true;
                        break;
                    }
                }

                if (!overlaps) {
                    validPosition = true;
                }
                attempts++;
            }
            newParticles.push(newParticle);
        });
        particlesRef.current = newParticles;
    }, []);

    // Animation loop
    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId;

        const animate = () => {
            const isClassroomPage = location.pathname === '/classroom';
            const particles = particlesRef.current;

            particles.forEach((p, index) => {
                let { vx, vy } = p;

                // --- Force Application Phase ---
                if (isClassroomPage) {
                    // Edge attraction force
                    const edgeAttractionStrength = 0.02;
                    const dists = {
                        left: p.x,
                        right: window.innerWidth - p.x,
                        top: p.y,
                        bottom: window.innerHeight - p.y,
                    };
                    const minEdgeDist = Math.min(dists.left, dists.right, dists.top, dists.bottom);

                    if (minEdgeDist === dists.left) vx -= (dists.left - p.radius) * edgeAttractionStrength;
                    else if (minEdgeDist === dists.right) vx += (dists.right - p.radius) * edgeAttractionStrength;
                    else if (minEdgeDist === dists.top) vy -= (dists.top - p.radius) * edgeAttractionStrength;
                    else if (minEdgeDist === dists.bottom) vy += (dists.bottom - p.radius) * edgeAttractionStrength;

                    // Subtle mouse interaction in classroom
                    const dxMouse = p.x - mousePos.current.x;
                    const dyMouse = p.y - mousePos.current.y;
                    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                    if (distMouse < 100) { // Smaller radius
                        const angle = Math.atan2(dyMouse, dxMouse);
                        const force = (100 - distMouse) / 100;
                        vx += Math.cos(angle) * force * 0.05; // Even weaker force
                        vy += Math.sin(angle) * force * 0.05; // Even weaker force
                    }

                } else {
                    // Homepage: Mouse interaction
                    const dxMouse = p.x - mousePos.current.x;
                    const dyMouse = p.y - mousePos.current.y;
                    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                    if (distMouse < 150) {
                        const angle = Math.atan2(dyMouse, dxMouse);
                        const force = (150 - distMouse) / 150;
                        vx += Math.cos(angle) * force * 0.5;
                        vy += Math.sin(angle) * force * 0.5;
                    }

                    // Homepage: Hero title avoidance
                    if (heroRect) {
                        const heroCenterX = heroRect.left + heroRect.width / 2;
                        const heroCenterY = heroRect.top + heroRect.height / 2;
                        const dxHero = p.x - heroCenterX;
                        const dyHero = p.y - heroCenterY;
                        const distHero = Math.sqrt(dxHero * dxHero + dyHero * dyHero);
                        const avoidDist = (Math.max(heroRect.width, heroRect.height) / 2) + p.radius;
                        if (distHero < avoidDist) {
                            const angle = Math.atan2(dyHero, dxHero);
                            const force = (avoidDist - distHero) / avoidDist;
                            vx += Math.cos(angle) * force * 0.7;
                            vy += Math.sin(angle) * force * 0.7;
                        }
                    }
                }

                // Damping
                vx *= 0.92;
                vy *= 0.92;
                
                p.vx = vx;
                p.vy = vy;
            });

            // --- Collision and Position Update Phase ---
            particles.forEach((p, index) => {
                 // Particle collision (Hard Correction)
                for (let i = index + 1; i < particles.length; i++) {
                    const otherP = particles[i];
                    const dx = p.x - otherP.x;
                    const dy = p.y - otherP.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const minDist = p.radius + otherP.radius;
                    if (dist < minDist) {
                        const angle = Math.atan2(dy, dx);
                        const overlap = (minDist - dist) * 0.5;
                        p.x += Math.cos(angle) * overlap;
                        p.y += Math.sin(angle) * overlap;
                        otherP.x -= Math.cos(angle) * overlap;
                        otherP.y -= Math.sin(angle) * overlap;
                    }
                }
                
                // Update position
                p.x += p.vx;
                p.y += p.vy;
            });

            setTick(tick => tick + 1);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [location, heroRect]); // Re-run effect if location changes

    return (
        <div className="interactive-background">
            {particlesRef.current.map((pos, index) => (
                <img
                    key={index}
                    src={images[index]}
                    className="bg-image"
                    style={{
                        transform: `translate(${pos.x - pos.radius}px, ${pos.y - pos.radius}px)`,
                    }}
                    alt=""
                />
            ))}
        </div>
    );
};

export default InteractiveBackground;
