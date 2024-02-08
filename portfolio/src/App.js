import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { distance } from '@popmotion/popcorn';
import './App.css'; 

const grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
const size = 60;
const gap = 10;

const Square = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        opacity: 1, // Adjusted opacity for subtlety
      }}
    />
  );
};

function App() {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    
    <div className="App" >
      <motion.div
        animate={{ "--base-hue": 360 }}
        initial={{ "--base-hue": 0 }}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100vh", position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {/* Adjust the positioning of your grid here if needed */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexWrap: 'wrap', width: `${(size + gap) * 4}px`, height: `${(size + gap) * 4}px` }}>
          {grid.map((row, rowIndex) =>
            row.map((_, colIndex) => (
              <Square
                key={`${rowIndex}-${colIndex}`}
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            ))
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          style={{
            color: "white",
            fontSize: "128px",
            position: "absolute",
            top: "50%", // This centers the text vertically
            left: "50%", // This centers the text horizontally
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          Sudhanshu Singh
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;



