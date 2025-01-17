import React, { useState } from 'react';
import Table from './Table';
import './App.css';
import type { Player } from './types';

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  // Function to generate random players
  const generateRandomPlayers = (num: number) => {
    return Array.from({ length: num }, () => ({
      id: Math.random(),
      name: `Player ${Math.floor(Math.random() * 1000)}`,
      age: Math.floor(Math.random() * 50) + 18,
      score: Math.round(Math.random() * 100)
    }));
  };

  // Handle "Load More Data" button click
  const handleLoadMore = () => {
    const newPlayers = generateRandomPlayers(5);
    setPlayers((prevPlayers) => [...prevPlayers, ...newPlayers]);
  };

  return (
    <div className="container">
      <h1>Space Game - Player List</h1>
      <h2>Click the button below to add new players to the galaxy!</h2>
      <button className="load-more-button" onClick={handleLoadMore}>
        Load More Data
      </button>
      <Table players={players} />
    </div>
  );
};

export default App;