import React from "react";
import { AppPaths } from "../../constants";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Stack direction="horizontal" gap={2} className="p-3"> 
            <Button href={AppPaths.main} as="a" variant="primary">
                Главная
            </Button>
            <Button href={AppPaths.services} as="a" variant="success">
                Услуги
            </Button>
        </Stack>
    );
};

export default Header;