import React from "react";
import { NavLink } from "react-router-dom";
import { AppPaths } from "../../constants";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Stack direction="horizontal" gap={2} className="p-3"> 
            <NavLink to={AppPaths.main}>
                <Button>
                    Главная
                </Button>
            </NavLink>
            <NavLink to={AppPaths.services}>
                <Button>
                    Услуги
                </Button>
            </NavLink>
            <NavLink to={AppPaths.auth} className="ms-auto">
                <Button variant="outline-secondary">
                    Вход
                </Button>
            </NavLink>
        </Stack>
    );
};

export default Header;