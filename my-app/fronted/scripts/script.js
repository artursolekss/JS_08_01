$($.getJSON("http://localhost:5000/get-allCustomer",
    function(data) {

        const customers = data.response.customers;
        const customersTabElement = $("#customersTab");
        for (let i = 0; i < customers.length; i++) {
            const customer = customers[i];

            const row = document.createElement("tr");

            const id = document.createElement("td");
            id.innerHTML = customer.id;
            row.append(id);

            const firstName = document.createElement("td");
            firstName.innerHTML = customer.firstname;
            row.append(firstName);

            const lastName = document.createElement("td");
            lastName.innerHTML = customer.lastname;
            row.append(lastName);

            const email = document.createElement("td");
            email.innerHTML = customer.email;
            row.append(email);

            const phone = document.createElement("td");
            phone.innerHTML = customer.phone;
            row.append(phone);

            const vip = document.createElement("td");
            vip.innerHTML = Number(customer.vip) === 1 ? 'Yes' : "No";
            row.append(vip);

            customersTabElement.append(row);
        }
    }))