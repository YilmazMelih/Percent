
import React, { useState, useEffect } from 'react';
import './InteractiveBackground.css';

const modules = import.meta.glob('../../assets/images/percent visual system/*.svg', { eager: true });
const images = Object.values(modules).map((module) => module.default);

const InteractiveBackground = ({ heroRect }) => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const newPositions = [];
        const minDist = 200;
        const maxAttempts = 100; // Prevent infinite loops

        images.forEach(() => {
            let newPos;
            let validPosition = false;
            let attempts = 0;

            while (!validPosition && attempts < maxAttempts) {
                newPos = {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    vx: 0,
                    vy: 0,
                };

                let overlaps = false;

                // Check against heroRect
                if (heroRect) {
                    const heroCenterX = heroRect.left + heroRect.width / 2;
                    const heroCenterY = heroRect.top + heroRect.height / 2;
                    const dxHero = newPos.x - heroCenterX;
                    const dyHero = newPos.y - heroCenterY;
                    const distHero = Math.sqrt(dxHero * dxHero + dyHero * dyHero);
                    const avoidDist = (Math.max(heroRect.width, heroRect.height) / 2) + 100;
                    if (distHero < avoidDist) {
                        overlaps = true;
                    }
                }

                // Check against other particles if no overlap with hero yet
                if (!overlaps) {
                    for (const pos of newPositions) {
                        const dx = newPos.x - pos.x;
                        const dy = newPos.y - pos.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < minDist) {
                            overlaps = true;
                            break;
                        }
                    }
                }

                if (!overlaps) {
                    validPosition = true;
                }
                attempts++;
            }
            // Add the position anyway to ensure all letters are rendered
            newPositions.push(newPos);
        });

        setPositions(newPositions);

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            setPositions((currentPositions) =>
                currentPositions.map((pos, index) => {
                    let { vx, vy } = pos;

                    // --- Velocity calculation phase ---
                    // Mouse interaction
                    const dxMouse = pos.x - mouseX;
                    const dyMouse = pos.y - mouseY;
                    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                    if (distMouse < 150) {
                        const angle = Math.atan2(dyMouse, dxMouse);
                        const force = (150 - distMouse) / 150;
                        vx += Math.cos(angle) * force * 0.5;
                        vy += Math.sin(angle) * force * 0.5;
                    }

                    // Hero title avoidance
                    if (heroRect) {
                        const heroCenterX = heroRect.left + heroRect.width / 2;
                        const heroCenterY = heroRect.top + heroRect.height / 2;
                        const dxHero = pos.x - heroCenterX;
                        const dyHero = pos.y - heroCenterY;
                        const distHero = Math.sqrt(dxHero * dxHero + dyHero * dyHero);
                        const avoidDist = (Math.max(heroRect.width, heroRect.height) / 2) + 100; // 100 is particle radius

                        if (distHero < avoidDist) {
                            const angle = Math.atan2(dyHero, dxHero);
                            const force = (avoidDist - distHero) / avoidDist;
                            vx += Math.cos(angle) * force * 0.7;
                            vy += Math.sin(angle) * force * 0.7;
                        }
                    }

                    // Damping
                    vx *= 0.95;
                    vy *= 0.95;

                    // --- Position calculation and correction phase ---
                    let newX = pos.x + vx;
                    let newY = pos.y + vy;

                    // Particle collision (Hard Correction)
                    for (let i = 0; i < currentPositions.length; i++) {
                        if (i === index) continue;
                        const otherPos = currentPositions[i];
                        const dx = newX - otherPos.x;
                        const dy = newY - otherPos.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const minDist = 200;

                        if (dist < minDist && dist > 0) {
                            const angle = Math.atan2(dy, dx);
                            const overlap = minDist - dist;
                            // Immediately move the particle to resolve overlap
                            newX += Math.cos(angle) * overlap * 0.5;
                            newY += Math.sin(angle) * overlap * 0.5;
                        }
                    }

                    return { ...pos, x: newX, y: newY, vx, vy };
                })
            );
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [heroRect]);

    return (
        <div className="interactive-background">
            {positions.map((pos, index) => (
                <img
                    key={index}
                    src={images[index]}
                    className="bg-image"
                    style={{
                        transform: `translate(${pos.x}px, ${pos.y}px)`,
                    }}
                    alt=""
                />
            ))}
        </div>
    );
};

export default InteractiveBackground;
