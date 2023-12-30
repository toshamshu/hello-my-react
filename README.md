# Commands
npx parcel index.html -- For dev build
npx parcel build index.html -- For prod build
# React component
 //Class based component - OLD 
 // Functional component - New

# JSX
 - JSX sanitizes data automatically
 - In JSX syntax between {} braces you can invoke any JS code
 - You can call other functions / functional components etc.. 
        const Title = () => ( Some JSX elements here )
        -- <Title /> OR {Title} OR {Title()}
# Parcel features
- Dev Build
- Local server
- HMR = Hot Module Replacement
- File Watching Algorithim
- Caching - Faster builds
- Image optimization
- Minification
- Bundling
- Compressing
- Differential bundling to support older browsers
- Diagnostics
- Error Handling
- For more info visit parcel.org


# Export and Imports
    - There are 2 types of export and import
    - default export -- eg. export default ComponentName / const
    - default import -- eg. import CompoenentName from 'path'
    - named export -- eg. export const SOME_URL = ''; // You can export multiple exports from one file
    -- named import -- eg. import { ComponentName } from 'path'
    --- Can I use both default and named export ?? Find out..

# React Hooks

    - When ever state variable updates react will re-render component
    useState - React will keep watch on useState variable 

# React useEffect
 - 1) useEffect with empty array will be executed initially when component mounted
 - 2) useEffect with state variable in array will be executed when ever state variable updates
 - 3) useEffect with no array will be executed on every render

# Routers
- https://reactrouter.com/en/main/routers/create-browser-router 
- Use <Outer /> component so that it can replace the relevant children component.
- We have to configure children which takes array of configs. - So this will help to replace only relevant element component and intact the header and footer components. -- You can see App.js

# EP-07: Finding Path
 - useErrorRoute for error page navigation
  - use children page configuration for navigating different pages
  - use <Outlet /> from react router for conditional component applying. For example /about routing <About /> should be used, and for /contact routing <Contact /> should be placed.
  - use <RouterProvider router={appRouter} /> for root.render where appRouter is router configurtion.
  - use createBrowserRouter from react router for route configurations.
        -- Prepare the object with path and element atributes.. and provide childrenElements with array of children configs.
  - use useRouteError from react router to identify error status and other error info.. err object you receive.      
  --- review code so far and identify each line of it...


# EP-08 classi
    - React class component lifecycle
        -- First the construction executed
        -- Then the render() method executed.. and if it finds any other children components inside render method then 
        that component's constructor and render methods will be executed in sequence.
        -- componentDidMount() -- another lifecycle method -- which will be executed after construction and  render.
        -- In case if componentDidMount() is in both parent and child components.. child's componentDidMount() will be executed first after that parent's
        -- Generally API calls inside class based component inside componentDidMount()
        -- With functional component we can use useEffect() to load API only once
        -- In react we want to load the page as --> then make API calls --> then fill the details 
                - so that we will not wait for the API calls to return .. rather will fill once API returns..
        -- In other way to explain.. we need react to render component first then make API call and then fill the details
            - To avoid waiting for API call return

    ### Component Lifecycle Diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    - React will be execute components in the following order with 2 phases "Render" and "Commit" 
        - constructor invoked 
        - render invoked
        - After this React will update DOM -- Executing constructor and render is "Render" phase
        - Then componentDidMount() / componentDidUpdate()  will be executed 

  -- So why React will complete constructor and render first of the all components and go to commit phase execution.
   -- because dom manipulation is costly, it will complete that and further move to update the respective components with data.

   -- Lifecycle of component will go like this:
        1) Component Mount
        2) Component Update
        3) Component unmount
    Component Mount phase -- as mentioned earlier, first it will execute 
    - constructor, then render - with DOM rendered and then componentDidMount() - componentDidMount will set the values in state variable..
    Component Update phase - 
    - component's render will be executed and further DOM will be updated
    - Further it componentDidUpdate will be executed..
    Component Unmounting:
        - this will be executed in case we navigate to other links, DOM will be updated with other component's html
    -- Generally why do we need to execute unmounting.. 
        for example: In a component setInterval(() => {console.log('timer log')}, 1000); 
        On a component this will be executed and even if we move on to other links.. this will continue to execute which will impact performance. We need this to be executed on a specific component and cleaned up while offloading that component. So in that case we can execute clearInterval on the componentWillUnmount() lifecycle method.
    -- Execute the app and observe logs on About page load and increment button click..
     -- Page is like this.. <About /> which contains <UserClass /> component as child..
      -- Parent constructor
      -- Parent render
      -- Child constructor
      -- Child render
      -- Child componentDidMount
      -- Parent componentDidMount
    -- Now if we have a counter increment button in both parent and child..
        -- When clicked on parent increment counter button
            -- both 'Parent render' and 'Child render' will be executed.
            -- in case child 'Increment counter' clicked
                --- only 'child render' will be executed.
    -- With componentDidMount -- we need to write conditions manually to check is state changed for given state variables
    - and useEffect(()=>{},[stateVar]) this will take care of stateVar watch and render every time this stateVar updates..
    -- And componentWillUnmount() is replaced with useEffect(()=>{
        //Code to invoke API
        return () => {
            // this will be executed while component unmount
        };
    }, []);

# EP -09 - custom hooks, chunking/ dynamic bundling/code splitting to make your app into smaller chunks.

- custom hooks helps sharing info across components
- We can have customHook invoked from any component, it is like a utility function - will help to avoid code duplication
- Dynamic Bundling - will help in bundling the code using lazy and import utils..
example instead of loading Component if we do lazy loading as below:
const Grocery = lazy(() => import('SomeComponent'));
-- So this will take care of moving the component code into it's file, instead of having in one single file.
-- While doing this lazy loading what happens is as React is quicker in rendering it is expected to have the relevant js file available, but since it is loading by that time it will throw error. So we need to use <Suspense> component wrapped in our component to tell React to wait for loading..


