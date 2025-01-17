import React, { useEffect, useState } from 'react';
import type { Player } from './types';

interface RowProps {
  player: Player;
  isHovered: boolean;
  setHoveredRow: (hoveredRow: number | null) => void;
}

// Use React.memo to prevent re-renders if props haven't changed
const Row: React.FC<RowProps> = ({ player, isHovered, setHoveredRow}) => {
    const { id, name, age, score } = player;
    const [counter, setCounter] = useState(0);  // Flickering counter state
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Timer state
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);  // Increment counter every second
      }, 1000);
  
      setTimer(interval);
    }, []);
    
    // Effect to simulate row re-render and log each time
    useEffect(() => {
        console.log(`Row with ID ${id} re-rendered`);
    }, [id]);

  return (
    <tr
    className="table-row"
    key={player.id}
    onMouseEnter={() => setHoveredRow(player.id)} // Hover state triggers global re-render
    onMouseLeave={() => setHoveredRow(null)}
    style={{
      backgroundColor: isHovered ? 'red' : '', // Background color changes on hover
      transition: 'background-color 0.3s', // Smooth transition
    }}
  >
      <td>{name}</td>
      <td>{age}</td>
      <td>{score}</td>
      <td style={{ color: 'red' }}>{counter}</td>  {/* Display the counter */}
    </tr>
  );
};

export default Row;