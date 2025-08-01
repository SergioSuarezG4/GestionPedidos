import  {BrowserRouter as Router, Routes, Route} from "react-router";
import Home from "../pages/home/Home";
import Client from "../pages/client/Client";
import Layout from "../components/layout/Layout";
import NewClient from "../pages/client/NewClient";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/Clientes" element={<Client/>}/>
                    <Route path="/Clientes/nuevo" element={<NewClient/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;