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
- We have to configure children which takes array of configs. - So this will help to replace only relevant Body component
and intact the header and footer components. -- You can see App.js

# EP-07: Finding Path
 - useErrorRoute for error page navigation
  - use children page configuration for navigating different pages
  - use <Outlet /> from react router for conditional component applying. For example /about routing <About /> should be used, and for /contact routing <Contact /> should be placed.
  - use <RouterProvider router={appRouter} /> for root.render where appRouter is router configurtion.
  - use createBrowserRouter from react router for route configurations.
        -- Prepare the object with path and element atributes.. and provide childrenElements with array of children configs.
  - use useRouteError from react router to identify error status and other error info.. err object you receive.      
  --- review code so far and identify each line of it...

