# Game Concept
The aim of Space-Shooter is to produce a fluent, retro-style, and fun single-player shooting game which uses Phaser3 framework based on a Canvas design.

# Story
The game is set in the near future outer space.
A human built spaceship is on a mission for collecting as many space diamonds (blue and white) as possible, while avoiding collisions with alien enemies and their lasers.

# Additional resource
- Leaderboard API service: https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3

# Playing Commands
- Moving the player: Arrow keys (up, down, left, and right).
- Shooting: spacebar.

# Game Structure
Consists of six different scenes (screens):
- Preloader: responsible for loading all the required assets, and displaying the initial scene to the user.
- Menu: main interface where the user can move throughout some of the scenes by clicking on the specific button ("PLAY", "COMMANDS", "SCORES"), and also, contains an input field so the user can enter and submit his/her name as a new player.
- Commands: displays the general rules, commands for playing the game, and a "BACK" button (go back to Menu).
- Scores: displays the top five scores that are saved on the API, and a "MENU" button.
- Game: displays the playing scene.
- GameOver: displays a "Game Over" legend, the total points achieved by the player, and three buttons: "MENU", "RESTART" (starts a new game and it will save a new user on the API with the same name), "SCORES".