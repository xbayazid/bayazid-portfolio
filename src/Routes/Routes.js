import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Projects from "../components/Projects/Projects";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CodersStackBox from "../ProjectDetails/CodersStackBox";
import DentiCare from "../ProjectDetails/DentiCare";
import DoctorsPortal from "../ProjectDetails/DoctorsPortal";

export const router  = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        {
            path: '/denticare',
            element: <DentiCare></DentiCare>
        },
        {
            path: '/doctorsportal',
            element: <DoctorsPortal></DoctorsPortal>
        },
        {
            path: '/codersStackBox',
            element: <CodersStackBox></CodersStackBox>
        },
        {
            path: '/projects',
            element: <Projects></Projects>
        }
        ]
    }
])