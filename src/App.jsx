import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";



function App() {
    const router = createBrowserRouter([
        {
            element: <NavBar />,
        },
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App
