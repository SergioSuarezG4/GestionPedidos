import NavBar from "./NavBar"
import { Outlet } from "react-router";

const Layout = () => {
    return(
        <>
        <div>
            <NavBar></NavBar>
        </div>
        <div className="mt-10">
            <Outlet/>
        </div>
        </>
    )
}
export default Layout;