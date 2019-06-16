# Card Game app [React/Redux/Unit Testing]

This is the Card Game App that utilizes https://deckofcardsapi.com/ API.

![card-game-app-thumb](https://user-images.githubusercontent.com/31347233/59564123-4bc63400-9043-11e9-8d96-396225539f2b.jpg)
![card-game-app-thumb](https://user-images.githubusercontent.com/31347233/59564124-4bc63400-9043-11e9-8bef-14f2570c60ac.jpg)

## Game Rules

- 2 to 4 players - one is human controlled, the others are controlled by computer
- one standard deck of 52 cards
- one card deal, each player gets 10 cards 
- human plays first
- order of play determined by clock-wise order
- computer randomly choose cards
- each player plays one card, highest card takes all
- card value from lowes to highest: A=1, 2 to 10 = card value, J=12, Q=13, K=14
- in case that two or more cards have the same value, last player with the same card takes all
- played cards cannot be reused
- game ends when players don't have any cards left in hand, left-over cards from deck are not delt
- the winner is the player with highest sum of values of taken cards. There can be more than one winner

## Project Objectives

- project made by React/Redux
- ES6+ syntax is prefered
- unit tests for components and Redux
- responsive design
- cards API (https://deckofcardsapi.com/), (usage of Piles from API is optional)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
