import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Text } from "@consta/uikit/Text";
import 'bootstrap/dist/css/bootstrap.min.css';

const AUTH_TOKEN_KEY_NAME = 'my-access_token';
const REFRESH_TOKEN_KEY_NAME = 'my-refresh_token';

export type Token = string;

export const getToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveTokens = (accessToken: Token, refreshToken: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY_NAME, refreshToken);
};

export const saveProfileData = (userData) => {
  localStorage.setItem('id', userData.id);
};

export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [invalidInput, setInvalidInput] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function updateFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!formData.username || !formData.password) {
        setInvalidInput(true);
        return;
      } else {
        setInvalidInput(false);
      }

      const resp = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: formData.username, password: formData.password, expiresInMins: 100 })
      });

      if (!resp.ok) {
        setError('Ошибка аутентификации');
        return;
      }

      const loginData = await resp.json();
      let [accessToken, refreshToken] = [loginData['accessToken'], loginData['refreshToken']];

      saveTokens(accessToken, refreshToken);

      const getMeResp = await fetch('https://dummyjson.com/auth/me', {
        method: "GET",
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      const userData = await getMeResp.json();

      saveProfileData(userData);
      navigate(`/user/${userData.id}`);
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Войти</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Логин</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Введите логин"
                onChange={updateFormData}
              />
            </div>
            <div className="form-group">
              <label>Пароль</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Введите пароль"
                onChange={updateFormData}
              />
            </div>
            {invalidInput &&
              <Text view="alert" className="mt-2">Заполните поля</Text>
            }
            {error &&
              <Text align="left" view="alert" className="mt-2">{error}</Text>
            }
            <button className="btn btn-primary btn-block mt-4" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;