import  {BrowserRouter as Router, Routes, Route} from "react-router";
import Home from "../pages/home/Home";
import Client from "../pages/client/Client";
import Layout from "../components/layout/Layout";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/Clientes" element={<Client/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;