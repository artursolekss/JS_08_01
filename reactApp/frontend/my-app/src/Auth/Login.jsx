import { useState } from "react"
import ButtonForm from "../Components/ButtonForm"
import InputForm from "../Components/InputForm"
import Label from "../Components/Label"
import LoginForm from "../Components/LoginForm"
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Register from "./Register"

export default function Login() {

    const [login, setLogin] = useState({ username: "", pass: "" });

    const onChange = (event) => {
        const id = event.target.id;
        const loginNew = Object.apply({}, login);
        if (id === "username") {
            loginNew.username = event.target.value;
        }
        else if (id == "password") {
            loginNew.pass = event.target.value;
        }
        setLogin(loginNew);
    }

    const onLogin = () => {

    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='register' element={<Register />} />
                </Routes>
                <LoginForm>
                    <div>
                        <Label htmlFor="username">
                            User Name
                        </Label>
                        <InputForm id="username" autocomplete="username" value={login.username}
                            onChange={(event) => { onChange(event) }} type="text" />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <InputForm id="password" value={login.pass}
                            onChange={(event) => { onChange(event) }} type="password" />
                    </div>
                    <ButtonForm onLogin={onLogin}>
                        Log in
                    </ButtonForm>
                    <Link to="/register">Register</Link>
                </LoginForm>
            </BrowserRouter>
            <Outlet></Outlet>
        </>
    )
}
