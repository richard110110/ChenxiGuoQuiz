# This quiz app is for the assignment of Manezco, building a quiz app

# deployed on https://festive-mirzakhani-0777d6.netlify.app/
this app has been deployed on netlify platform.
if you have any question, please contact to cguo3889@uni.sydney.edu.au

# opentdb API

a free API that can generate the quiz in JSON format, in each quiz, there are 4 four choices and only one is correct.

https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple'

# function

- when the app loading, i list 10 mutiple choice from different category (list in https://opentdb.com/api_config.php) randomly;


1. The quiz is made up of multiple questions, each presented one at a time.
2. Each question has four options that the user can choose from.
3. The current question must be answered before the next question can be attempted (the next question button is not available until the current question is answered). 
4. Once all questions have been answered, the user is shown their score.
5. Users can freely navigate to any questions that they have already answered. (by clicking the previous button)
6. Use an API to fetch the quiz data and results. (https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple')

7. Done the React Redux toolkit to do the state and action management

Current Score track
![](https://github.com/richard110110/ChenxiGuoQuiz/blob/main/resource/trackAnsweredQuestion.png?raw=true)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
