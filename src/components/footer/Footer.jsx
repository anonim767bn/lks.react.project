import React from "react";
import { AppPaths } from "../../constants";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Импортируем файл стилей

const Footer = () => {
    return (

        <div className="footer"> {/* Обернем в div с классом footer */}
        <hr/>
            <Stack direction="horizontal" gap={2} className="p-3"> 
                <Button href={AppPaths.main}>
                    Главная
                </Button>
                <Button href={AppPaths.services}>
                    Услуги
                </Button>
                <div className="company-name"> {/* Добавляем класс ms-auto для выравнивания вправо */}
                © Моя компания
                </div>
            </Stack>
        </div>
    );
};

export default Footer;