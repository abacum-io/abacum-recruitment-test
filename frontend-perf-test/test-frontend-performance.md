# React Performance Optimization Exercise

In this exercise, you are tasked with optimizing a React application simulating a player list in a space game. The app includes a table where players are listed, and each row contains basic information about the player. The goal is to improve the performance of the app, especially as the user interacts with it, by minimizing unnecessary re-renders and/or solving memory leaks.

## Setup:
- Pre-requisites: 
    - node: v20 or later 
    - npm: v10 or later
    - clone this repository
- Installation
    - Access this test within the repository: `cd frontend-perf-test`
    - Install dependencies: `npm install`
    - Start dev server: `npm run start`
    - Open your browser and visit `http://localhost:5173/`

## Application Behavior:

### State Management:

- The app uses React’s `useState` to store the list of players.
- Each time a player is added via the “Load More Data” button, the list of players grows, causing the entire table to re-render.

### Hover Effect

- When you hover over any row in the table, all rows in the table are re-rendered due to a state update in the parent component (`Table.tsx`). This is because the hover state is managed globally for the entire table, causing all rows to re-render on every hover event.
- The rows change their background color on hover, providing a visual effect, but the entire table re-renders on every hover, which can quickly become a performance bottleneck as the number of rows increases.

## Task Instructions

1. Analyze the Current Implementation and identify where the performance issues are in the code

2. Optimize the Application:
  - Prevent Unnecessary Re-renders
  - Avoid recalculating things unnecessarily
  - Detect and solve possible memory leaks

3. Demonstrate Performance Improvement
  - The app should remain **smooth and responsive** even as the user adds more rows and clicks on them.
  - You should measure and show improvements in terms of reduced memory usage and re-renders, ensuring the app remains usable.

