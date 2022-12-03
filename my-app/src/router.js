import { createBrowserRouter } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/dashcomponents/Transactions";
import Account from "./components/dashcomponents/Account";
import ErrorPage from "./components/ErrorPage"
import App from "./App";


const router  = createBrowserRouter(
    [
        {
            path:"/",
            element:<LoginForm />
        },
        {
            path:"/SignUpForm",
            element:<SignUpForm />
        },
        {
            path:"/Dashboard",
            element:<Dashboard />,
        },
        {
            path:'*',
            elementError:<ErrorPage />
        }
    ]
)

export default router