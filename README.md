# Memory Match Game 

A classic web-based memory matching game built with HTML, CSS, and JavaScript.

## Project Goal

The objective of the game is to find all the matching pairs of cards.

## Features

* Card Flipping Logic: Implements the core mechanism for flipping cards on click.
* Shuffle Function: Randomizes card positions at the start of every game.
* Match Checking: Compares two flipped cards and keeps them revealed if they match, or flips them back if they don't.
* Game State Tracking:Keeps a count of the player's moves and matched pairs.
* Restart Functionality: A button to reset the board and start a new game at any time.
* Responsive Design: The layout adjusts to work well on both desktop and mobile devices.

## Setup & How to Play

# 1. File Structure

Ensure you have the following three files in the same directory
# 2. Running the Game

*  Open the `index.html` file in any modern web browser
* The browser will load the game board with 16 face-down cards.

# 3. How to Play

*  Start:Click on any card to flip it over and reveal the symbol.
*  Second Card: Click a second card.
*  Matching:
    If the two revealed symbols are the same, they will stay face-up. You've found a pair!
     If the symbols are different, they will automatically flip back over after a 1-second delay.
*  Goal:Continue flipping pairs until all 8 pairs are found. The game tracks your total moves.
*  Restart: Click the "Restart Game" button to shuffle the cards and start a new game at any time.
