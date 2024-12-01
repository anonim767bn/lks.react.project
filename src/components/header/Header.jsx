import React from "react";
import { AppPaths } from "../../constants";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <Stack direction="horizontal" gap={2} className="p-3"> 
            <Button href={AppPaths.main}>
                Главная
            </Button>
            <Button href={AppPaths.services}>
                Услуги
            </Button>
            <Button href={AppPaths.auth} className="ms-auto" variant="outline-secondary">
                Вход
            </Button>
        </Stack>
    );
};

export default Header;