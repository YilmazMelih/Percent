import React from 'react';
import { buildPath } from '../../../engine/project';

const GlyphPreview = ({ config, nodeSize, showNodes }) => {
  if (!config) {
    return null; // Or a placeholder
  }

  const d = buildPath(config, nodeSize);

  return (
    <svg viewBox="-165 0 330 400" style={{ width: '100%', height: '100%' }}>
      <path fill={showNodes ? '#ccc' : '#333'} d={d}></path>
      {showNodes &&
        config.nodes.map((node) => {
          const size = nodeSize[node.id] * node.r;
          return (
            <circle
              key={node.id}
              cx={node.pos.x}
              cy={node.pos.y}
              r={size}
              fill="#167d48" // This is the green color from the main editor
              fillOpacity={0.8}
            />
          );
        })}
    </svg>
  );
};

export default GlyphPreview;
