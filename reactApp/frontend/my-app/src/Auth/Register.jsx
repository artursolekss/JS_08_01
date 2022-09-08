import { useState } from "react"
import ButtonForm from "../Components/ButtonForm"
import InputForm from "../Components/InputForm"
import Label from "../Components/Label"
import LoginForm from "../Components/LoginForm"

export default function Register() {

    const [login, setLogin] = useState({ username: "", pass: "" });

    const onRegister = () => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(login)
        }).then((response) => {
            response.json().then((body) =>
                alert(body.response));
        });
    }

    const onChange = (event) => {
        const id = event.target.id;
        const loginNew = Object.assign({}, login);
        if (id === "username") {
            loginNew.username = event.target.value;
        }
        else if (id == "password") {
            loginNew.pass = event.target.value;
        }
        setLogin(loginNew);
    }

    return (
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
            <ButtonForm onClick={onRegister}>
                Register
            </ButtonForm>
        </LoginForm>
    )
}