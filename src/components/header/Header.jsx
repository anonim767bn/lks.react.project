import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppPaths } from "../../constants";
import Button from 'react-bootstrap/Button';
import { Stack, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getToken } from "../pages/login-page/LoginPage";
import { useSelector } from 'react-redux';
import './Header.css'; // Импортируем файл стилей

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
    const profile = useSelector((state) => state.profile.value);

    useEffect(() => {
        const token = getToken();
        if (token) {
            setIsAuthenticated(true);
            setUserId(localStorage.getItem('id'));
        }
    }, []);

    return (
        <Stack direction="horizontal" gap={2} className="p-3 fixed-top bg-white shadow-sm">
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
            {isAuthenticated ? (
                <NavLink to={`/user/${userId}`} className="ms-auto d-flex align-items-center">
                    {profile && profile.image ? (
                        <Image
                            src={profile.image}
                            roundedCircle
                            height="30"
                            width="30"
                            className="me-2"
                            alt="User Avatar"
                        />
                    ) : (
                        <Button variant="outline-secondary">
                            Профиль
                        </Button>
                    )}
                </NavLink>
            ) : (
                <NavLink to={AppPaths.auth} className="ms-auto">
                    <Button variant="outline-secondary">
                        Вход
                    </Button>
                </NavLink>
            )}
        </Stack>
    );
};

export default Header;