import {createBrowserRouter} from "react-router-dom";
import Layout from "../Block/Layout"
import HomePages from "../Pages/HomePages";
import RoutePage from "../Pages/RoutePage";

export const Router = createBrowserRouter([
    {
        path:"/", element:<Layout/>,
        children:[
            {
                index: true, element:<HomePages/>
            },
            {
                path: "/detail/:id",
                element: <RoutePage />
            }
        ]
    }
])