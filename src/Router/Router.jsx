import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import CardDetails from "../Component/Cards/CardDetails";

const allRouter = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', 
               element: <Home></Home>, 
               loader: () => fetch ('data.json')
            }, 
            {
                path: '/donation', 
                element: <Donation></Donation>
            }, 
            {
                path: '/statistics', 
                element: <Statistics></Statistics>
            }, 
            {
                path: '/cardDetails/:id', 
                element: <CardDetails></CardDetails>, 
                loader: () => fetch ('data.json')
            }
        ]
    }
])

export default allRouter;