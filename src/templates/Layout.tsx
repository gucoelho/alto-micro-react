import { MainMenu } from "@components/organisms";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="sm:px-0 md:px-6 lg:px-6 xl:px-48">
            <MainMenu />
            <Outlet />
        </div>
    );
}

export default Layout