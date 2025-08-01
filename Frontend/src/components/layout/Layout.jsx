import NavBar from "./NavBar"
import { Outlet } from "react-router";

const Layout = () => {
    return(
        <>
        <div>
            <NavBar></NavBar>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}
export default Layout;