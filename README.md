# reactjs

Learning react

## Questions

1. Does useReducer() always reload a component when we use action dispatcher every time?
2. Can we have multiple <Context.providers> applied at the root level?
3. const [state, stateFn] = useState(). Can we pass stateFn to other components on eventHandlers?
4. Create 2 components visible on a page on the screen. Now use same CONTEXT on both of them and check if we update it from one component does it update the value in second component.
5. Browser show some kind of lines in react app when we interact with the app. How could we disable those lines?
6. If component name is **a.js** then is it necessary to name a css file **a.module.css** and can't we use **b.module.css**?

## Insights

1. We use useRef() when we just want to read the user input and don't want to manipulate it programmatically.
2. We use useState() when we want to read the user input and also want to manipulate it programmatically. We generally use useState() for values of primitive type only.
3. But if we have more than one kind of values interrelated to each other then we use useReducer(). We use objects to depict this inter-relation. So, we can use useReducer() when we are dealing with the states of objects instead of primitives.
4. const [state, stateFn] = useState(). Whenever we use stateFn(value) to update the value of the state, it reloads the whole component for which it is getting fired.
5. If we need an object in multiple components then instead of passing it via props we use useContext().
6. We can use multiple useEffect() functions inside a component.

## Hooks

### Routing Hooks on react-router-dom

1. useRouteError() - This hook helps in finding any error while navigating through the application. Check 23-adv-starting-project_lecture316\frontend\src\pages\Error.js - Lecture 327: Extracting Error Data & Throwing Responses

2. useLoaderData() - This hook helps in loading loader()'s data in a component. A loader()'s data can be loaded by the component which is used while defining the route on which loader is defined or the components used inside the page component (child components of page component). Lecture 319: Using Data From A Loader In The Route Component

3. json() - It is not a hook but a method that helps in sending data in json data as a response of particular AJAX call. We used it for defining AJAX errors in loaders in the form of Response. (Response if the native javascript class). Lecture 328: The json() Utility Function

4. useNavigate() - This hook is used to navigate within the application programmatically. Lecture 310: Navigating Programmatically

5. useParams() - This hook helps in fetching the route params. Lecture 311: Defining & Using Dynamic Routes

6. Putting a back button. Lecture 313: Understanding Relative & Absolute Paths

7. useNavigation() - It helps in showing the current state of navigation. It is more useful while using loaders because it takes a while to fetch data when using AJAX request from loader. Lecture 323: Reflecting The Current Navigation State in the UI

8. How to fetch route params in loader function. Lecture 329: Dynamic Routes & loader()s

## Resources

1. https://feature-sliced.design/docs/get-started/overview

## Learnable

1. Javascript Fetch API
2. Response API
3. Interceptors in React
4. Lazy loading in React for single route DONE
5. Lazy loading in React for a group of pages.

## Component libraries

1. Components - https://github.com/grommet/grommet/tree/master
2. React spinners - https://github.com/davidhu2000/react-spinners
3. Components - https://github.com/react-bootstrap/react-bootstrap

## Progress

359 + 25 / 537
