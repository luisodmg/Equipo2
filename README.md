# Catch The Ball

Catch The Ball is a small browser game built with plain HTML, CSS, and JavaScript. The goal is simple: move the catcher bar with your mouse and keep the falling ball from hitting the bottom of the screen.

## How to Play

1. Open the game in a browser.
2. Move your mouse left and right inside the canvas.
3. Catch the red ball with the white bar.
4. Each successful catch increases your score.
5. Every 5 points, the ball falls a little faster.
6. If the ball reaches the bottom of the canvas, the game resets and your score goes back to zero.

## Game Rules

- The ball starts at a random horizontal position near the top of the canvas.
- The catcher follows your mouse position.
- A catch is registered when the ball reaches the catcher area and its horizontal position overlaps the bar.
- Missing the ball triggers a `Game Over` alert and restarts the round.

## Project Structure

- `index.html` sets up the canvas and loads the game script.
- `style.css` centers the game on the page and styles the canvas.
- `script.js` contains the full game logic, rendering, collision detection, and score handling.

## Features

- Canvas-based gameplay
- Mouse-controlled catcher
- Randomized ball position on each reset
- Score tracking
- Progressive difficulty increase
- Simple restart flow after game over

## Technical Notes

The game uses the browser’s `requestAnimationFrame` loop for smooth animation. Rendering is handled directly with the Canvas 2D API, so no external libraries are required.

The current game window is fixed at `400 x 600` pixels. The catcher starts near the bottom of the canvas, and the ball speed increases gradually as the score rises.

## How to Run

You can run the project by opening `index.html` in a browser.

If you are using Visual Studio Code, you can also:

1. Open the `Catch The Ball` folder.
2. Open `index.html`.
3. Launch it with Live Server, if installed.

## Possible Improvements

- Add sound effects for catches and game over.
- Replace the alert-based reset with an in-game restart screen.
- Add touch support for mobile devices.
- Make the canvas responsive to different screen sizes.
- Add levels, lives, or multiple falling objects.

## License

No license has been specified for this project yet.