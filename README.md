### Small Google Analytics Test in React

We've installed GA via `npm install react-ga --save` in the terminal.

If you add `import ReactGA from 'react-ga';` to the top of you App.js
and then:

`function initializeReactGA() { ReactGA.initialize('Tracking Number'); ReactGA.pageview('/homepage'); }`

Replace the tracking number with your own hosting
