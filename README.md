# Catch The Ball

Catch The Ball is a small browser game built with plain HTML, CSS, and JavaScript. The goal is to keep the falling ball in play for as long as possible by moving the catcher with your mouse.

## Overview

The game runs entirely in the browser. A ball falls from the top of the canvas, the player controls a paddle near the bottom, and each successful catch increases the score. The current version also shows a title above the game and a score history panel beside the canvas.

## How To Play

1. Open the project in a browser by launching `index.html`.
2. Move your mouse left and right over the canvas.
3. Use the paddle to catch the falling ball.
4. Each catch adds points to your score.
5. The ball speeds up gradually as your score increases.
6. If the ball reaches the bottom, the round ends and the game resets.

## Game Rules

- The ball starts near the top of the canvas at a random horizontal position.
- The catcher follows the mouse horizontally.
- A catch is registered when the ball overlaps the catcher area.
- Missing the ball triggers a `Game Over` alert.
- The final score is saved to the history panel when a round ends.
- The score history keeps the most recent 5 completed rounds.

## Current UI

- A title reading `Catch the Ball` appears above the canvas.
- The game canvas sits beside a score history panel.
- The score history table shows the last few completed scores.
- If there are no saved scores yet, the panel displays `Sin partidas aun`.

## Project Structure

- `Catch The Ball/index.html` defines the page layout, title, canvas, and score table.
- `Catch The Ball/style.css` styles the page, canvas, title, and score history panel.
- `Catch The Ball/script.js` contains the gameplay logic, rendering loop, collision detection, and score tracking.

## Technical Details

The game uses the Canvas 2D API for rendering and `requestAnimationFrame` for animation. No external libraries are required.

Current gameplay values:

- Canvas size: `700 x 600`
- Ball radius: `15`
- Paddle width: `80`
- Paddle height: `10`
- Starting ball speed: `3`
- Score per catch: `2`
- Maximum stored scores: `5`

## Running The Game

You can run the project by opening `Catch The Ball/index.html` in a browser.

If you are using Visual Studio Code, you can also:

1. Open the `Catch The Ball` folder.
2. Open `index.html`.
3. Launch it with Live Server, if installed.

## Possible Improvements

- Add touch support for mobile devices.
- Make the canvas responsive to different screen sizes.
- Replace the alert-based game over flow with an in-game restart screen.
- Add sound effects for catches and game over.
- Add multiple balls or difficulty levels.

## License

No license has been specified for this project yet.