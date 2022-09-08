import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
function Customers() {

    const [customers, setCustomers] = useState([]);
    const [loadDone, setLoadDone] = useState(false);

    useEffect(() => {
        if (!loadDone)
            loadCustomers();
    })

    const loadCustomers = () => {

        fetch("http://localhost:5000/get-allCustomers", {
            method: "GET"
        }).then((response) => {
            response.json().then(obj => {
                setCustomers(obj.response.customers);
                setLoadDone(true);
            })
        })
    }

    const addDummyClient = () => {
        const customersCopy = [...customers];//copy the array
        let id;
        if (customersCopy.length === 0)
            id = 1;
        else
            id = customersCopy[customersCopy.length - 1].id + 1;
        const dummyCust = {
            id: id,
            firstname: "DummyFirstName",
            lastname: "DummyLastName",
            email: "DummyEmail",
            phone: "DummyPhone",
            vip: "Yes"
        }
        customers.push(dummyCust);
        setCustomers(customers);
    }
    return (
        <>
            <Button onClick={addDummyClient}>Add dummy client</Button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-Mail</th>
                        <th>Phone</th>
                        <th>Vip</th>
                    </tr>
                </thead>
                <tbody id="customersTab">
                    {customers.map((customer) => {
                        return (
                            <tr key={customer.id}>
                                <td>
                                    {customer.id}
                                </td>
                                <td>
                                    {customer.firstname}
                                </td>
                                <td>
                                    {customer.lastname}
                                </td>
                                <td>
                                    {customer.email}
                                </td>
                                <td>
                                    {customer.phone}
                                </td>
                                <td>
                                    {customer.vip === 1 ? "Yes" : "No"}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );

}

export default Customers;


// import React from 'react';

// class Customers extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             customers: []
//         }
//         this.loadCustomers();
//     }

//     loadCustomers = () => {

//         fetch("http://localhost:5000/get-allCustomers", {
//             method: "GET"
//         }).then((response) => {
//             response.json().then(obj => {
//                 this.setState({ customers: obj.response.customers })
//             })
//         })
//     }

//     addDummyClient = () => {
//         const customers = [...this.state.customers];//copy the array
//         let id;
//         if (customers.length === 0)
//             id = 1;
//         else
//             id = customers[customers.length - 1].id + 1;
//         const dummyCust = {
//             id: id,
//             firstname: "DummyFirstName",
//             lastname: "DummyLastName",
//             email: "DummyEmail",
//             phone: "DummyPhone",
//             vip: "Yes"
//         }
//         customers.push(dummyCust);
//         this.setState({ customers: customers });
//     }

//     render() {
//         return (
//             <>
//                 <button onClick={this.addDummyClient}>Add dummy client</button>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>E-Mail</th>
//                             <th>Phone</th>
//                             <th>Vip</th>
//                         </tr>
//                     </thead>
//                     <tbody id="customersTab">
//                         {this.state.customers.map((customer) => {
//                             return (
//                                 <tr key={customer.id}>
//                                     <td>
//                                         {customer.id}
//                                     </td>
//                                     <td>
//                                         {customer.firstname}
//                                     </td>
//                                     <td>
//                                         {customer.lastname}
//                                     </td>
//                                     <td>
//                                         {customer.email}
//                                     </td>
//                                     <td>
//                                         {customer.phone}
//                                     </td>
//                                     <td>
//                                         {customer.vip}
//                                     </td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </>
//         );
//     }

// }

// export default Customers