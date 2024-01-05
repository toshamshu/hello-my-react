import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/UserContext";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(()=>{
        //Make an API call for authentication
        const data = {
            name: 'Khaja S Mohammed'
        }
        setUserName(data.name);
    },[]);
    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading ....</h1>}><Grocery /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout />);
/**
 * Header
 *  - Logo
 *  - Nav Items / Menu
 * Body
 *  -Search
 *  - Restarurant Container
 *      - Restarurant Card
 *          - Img
 *          - Name of Res, Start rating, cuisines, delivery time
 * Footer
 *  - Links
 *  - Address
 *  - Content
 */