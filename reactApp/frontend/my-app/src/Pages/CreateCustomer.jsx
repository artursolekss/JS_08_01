import { useState } from "react";
import Form from "react-bootstrap/Form"
import FormGroup from "react-bootstrap/FormGroup";
import Label from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";

function CreateCustomer() {

    const [customer, setCustomer] = useState({
        name: "", lastname: "",
        email: "", phone: "", vip: false
    });

    const onInputChange = (event) => {
        let value;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        else {
            value = event.target.value;
        }
        const customerChanged = Object.assign({}, customer);//Copy object
        customerChanged[event.target.id] = value;
        setCustomer(customerChanged);
    }

    const InputElement = (fieldname, type) => {
        return (
            <input id={fieldname} value={customer[fieldname]}
                onChange={(event) => { onInputChange(event) }}
                type={type} />
        )
    }

    const onSave = () => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");
        fetch("http://localhost:5000/add-customer", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(customer)
        }).then((response) => {
            response.json().then((body) =>
                alert(body.response));
        });
    }

    return (
        <Form>
            <FormGroup>
                <Label htmlFor="name">
                    First Name
                </Label>
                {InputElement("name", "text")}
                <Label htmlFor="lastame">
                    Last Name
                </Label>
                {InputElement("lastname", "text")}
                <Label htmlFor="email">
                    E-Mail
                </Label>
                {InputElement("email", "text")}
                <Label htmlFor="phone">
                    Phone
                </Label>
                {InputElement("phone", "text")}
                <Label htmlFor="vip">
                    Vip Flag
                </Label>
                {InputElement("vip", "checkbox")}

            </FormGroup>
            <Button onClick={onSave}>Save</Button>
        </Form>
    )


}

export default CreateCustomer;