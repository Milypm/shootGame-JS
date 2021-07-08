![](https://img.shields.io/badge/Microverse-blueviolet)
# Retro Shooter Game With Phaser3/JavaScript

![img_1](https://user-images.githubusercontent.com/54684961/122150055-aeb15800-ce22-11eb-8017-08a6f0b0ac97.png)
![img_2](https://user-images.githubusercontent.com/54684961/122150131-c983cc80-ce22-11eb-9c13-ce806a8f314f.png)
![img_3](https://user-images.githubusercontent.com/54684961/122150095-bbce4700-ce22-11eb-9113-9cc13f9c0aae.png)

> I created this web video-game which recreates some aspects of classic space-shooting games. I used the Phaser3 library for building the whole game environment and the different scenes, such as Boot, Preloader, Menu, Commands, Scores, Game and GameOver. I also used Webpack for bundling modules, classes and assets.
A provided API was used to store/retrieve the players/scores.

## Live Project
You can visit the live project here: [Space-Shooter-Netlify](https://space-shooter-game1706.netlify.app/)

## Project Presentation
Watch a short live presentation for the project here: [Loom](https://www.loom.com/share/475be87cd69348b38d397c0e2f563d66)

## Built With
- Phaser3
- JavaScript
- Webpack
- Git
- Jest
- Netlify (deployment)

## Game Context
Your spaceship is on a mission for collecting as many space diamonds (blue and white) as possible, while avoiding collisions with enemies and their lasers.

## How To Play (Browser)
- Go to [Space-Shooter-Netlify](https://space-shooter-game1706.netlify.app/)... OR ...
- Follow the steps of "How To Run It (On Local System)" below
    - On the Menu scene, enter your name so we can save your name and score to our database (API)
    - Click on the "COMMANDS" button to have a look at the game's rules and commands
    - Click on the "PLAY" button to start the game
    - Use the arrow keys (up, down, left, right) for moving, avoid  enemies/lasers, and to collect blue and white gems
    - Use the spacebar to shoot lasers to the enemies
    - Look at your points/collected gems at the top-right corner of the screen
    - If you get hit by an enemy or its laser, you get killed, and you will see the "GAME OVER" screen with your final score
    - Click on the "RESTART" button to play again (as a new player)
    - Click on the "SCORES" button to see the current top five scores
    - Click on the "MENU" button to go to the Menu scene

## How To Run It (On Local System)
1. It's recommended to use Git's latest version.
2. Clone or download the repo: [shootGame-JS](https://github.com/Milypm/shootGame-JS) to your local system
    - Click on the "Code" green button and copy 'HTTPS URL'
    - **On an empty folder** on your local system, open the command-line: `git clone 'HTTPS URL'`
3. Go to the repo root directory
4. Install webpack-dev-server: 'npm install webpack-dev-server --save-dev'
5. On your terminal, run 'npm run start'
6. When the browser opens, click on 'dist' directory

## Recommendations For Playing (Chrome / Firefox)
- To avoid getting autoplay related warnings in the browser console:
    - Click on top URL left bar and show below popup
    - Then click on allow audio and video
    - Then refresh your browser, now you shouldn't get any autoplay related warning in the browser console

## Tests (Code Editor Terminal / Command Line)
- Install Jest: 'npm install --save-dev jest'
- Run 'npm run test' or 'npm run watch' (for automatic Jest execution after updating the code)

## Acknowledgements
- [Phaser3](https://phaser.io/phaser3)
- [Zenva: Phaser GameDev Tutorials](https://phasertutorials.com/creating-a-phaser-3-template-part-1/)
- [York Computer Solutions: Build a Space Shooter with Phaser 3](https://learn.yorkcs.com/category/tutorials/gamedev/phaser-3/build-a-space-shooter-with-phaser-3/)
- [OpenGameArt](https://opengameart.org/)
- [Ian Peter](https://opengameart.org/users/ian-peter) for Spaceship (Player) image
- [Xevin](https://opengameart.org/users/xevin) for Spaceship (Enemy) image
- [Clint Bellanger](https://opengameart.org/users/clint-bellanger) for diamonds (gems) images
- [Giphy.com](https://giphy.com/)
- [Psyklon](https://giphy.com/balazsvarga/) for [star-wars-hyperspace](https://giphy.com/gifs/star-wars-hyperspace-l0GtxKBCRjO9TtRfy)
- [Netlify](https://www.netlify.com/)

## Author
**Mily Puente** :woman_technologist:
- GitHub: [@Milypm](https://github.com/Milypm)
- LinkedIn: [Mily Puente](https://www.linkedin.com/in/milypuentem/)
- Twitter: [@MilyPuente](https://twitter.com/MilyPuente)
 
## Contribute :point_left:
Any advice and suggestion for improvement are more than welcome.
Visit [issues' section](https://github.com/Milypm/shootGame-JS/issues)

## Show Your Support
Give a :star2: if you like this project!

## License
This project is [MIT Licensed](https://github.com/Milypm/shootGame-JS/blob/build-game/LICENSE)
