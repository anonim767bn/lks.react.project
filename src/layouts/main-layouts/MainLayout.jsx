import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default MainLayout;