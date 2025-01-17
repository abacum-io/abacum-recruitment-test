import React, { useState } from 'react';
import Row from './Row';
import type { Player } from './types';

interface TableProps {
  players: Player[];
}

const Table: React.FC<TableProps> = ({ players }) => {
    const [hoveredRow, setHoveredRow] = useState<number|null>(null); // Global hover state
  
    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Age</th>
            <th>Score</th>
            <th>Time waiting (in seconds)</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <Row key={player.id} player={player} isHovered={hoveredRow === player.id} setHoveredRow={setHoveredRow}/>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;