# reactjs

Learning react

## Questions

1. Does useReducer() always reload a component when we use action dispatcher everytime?
2. Can we have multiple <Context.providers> applied at the root level?
3. const [state, stateFn] = useState(). Can we pass stateFn to other components on eventHandlers?
4. Create 2 components visible on a page on the screen. Now use same CONTEXT on both of them and check if we update it from one component does it update the value in second component.
5. Browser show some kind of lines in react app when we interact with the app. How could we disable those lines?
6. If component name is **a.js** then is it necessary to name a css file **a.module.css** and can't we use **b.module.css**?

## Insights

1. We use useRef() when we just want to read the user input and don't want to manipulate it programatically.
2. We use useState() when we want to read the user input and also want to manipulate it programatically. We generally use useState() for values of primitive type only.
3. But if we have more than one kind of values interrelated to each other then we use useReducer(). We use objects to depict this inter-relation. So, we can use useReducer() when we are dealing with the states of objects instead of primitives.
4. const [state, stateFn] = useState(). Whenever we use stateFn(value) to update the value of the state, it reloads the whole component for which it is getting fired.
5. If we need an object in multiple components then instead of passing it via props we use useContext().
6. We can use multiple useEffect() functions inside a component.

## Resources

1. https://feature-sliced.design/docs/get-started/overview

## Learnables

1. Javascript Fetch API
2. Response API

## Progress

320 + 25 / 537
