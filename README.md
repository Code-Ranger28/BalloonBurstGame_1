Balloon Burst Game:
A fun game where players inflate a balloon by clicking the air pump, and the balloon starts flying once fully inflated. The objective is to burst the balloon by tapping it.

Features:
Air Pump Button: Inflate the balloon by clicking the pump button.
Random Movement: Once inflated, the balloon floats around in random directions.
Tap to Burst: Pop the balloon by tapping it.
Sound Effect: Play a burst sound when the balloon pops.
Interactive UI: Displays a message when the balloon bursts.

Tech Stack:
1)Frontend: React.js
2)Game Engine: Phaser.js
3)Assets: Balloon image, pump image, sound effect
4)Styling: CSS for basic layout

Project Structure:
public/assets/: Contains game assets (images, sounds).
src/BalloonGame.js: Contains game logic using Phaser.js.
src/App.js: Renders the game component.

Prerequisites
Make sure you have Node.js and npm installed.

Installation
Clone the repository:
git clone https://github.com/your-username/BalloonBurstGame_1.git
cd BalloonBurstGame

Install dependencies:
npm install

Run the development server:
npm start

Open the game:
Open your browser and go to http://localhost:3000.

🎮 How to Play
Click the "Pump Air" button to inflate the balloon.
Once the balloon is fully inflated, it will start moving randomly.
Tap the balloon to burst it and display a message with a pop sound.
Refresh the page to play again!

📦 Dependencies
Phaser.js: Game framework
npm install phaser

🐞 Troubleshooting
Image Not Loading:
Ensure your assets are placed in the correct folder (public/assets/).
Verify the file names are correct (case-sensitive).

Phaser Errors:
If you encounter a Cannot read properties of undefined error, ensure your function calls have the correct this context.


Acknowledgements
Phaser.js for the game engine.
