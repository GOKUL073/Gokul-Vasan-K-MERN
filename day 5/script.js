
// =================================
// TASK 1 - STUDENT DETAILS
// =================================

function getStudentDetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const student = {
                id: 101,
                name: "Gokul",
                department: "CSE Cybersecurity"
            };

            resolve(student);
        }, 2000);
    });
}

async function displayStudent() {
    const result = document.getElementById("studentResult");

    result.innerHTML = "Loading...";

    const student = await getStudentDetails();

    result.innerHTML =
        "ID: " + student.id +
        "<br>Name: " + student.name +
        "<br>Department: " + student.department;
}


// =================================
// TASK 2 - PRODUCT AVAILABILITY
// =================================

function checkAvailability(isAvailable) {
    return new Promise((resolve, reject) => {
        if (isAvailable) {
            resolve("Product Available");
        } else {
            reject("Product Out of Stock");
        }
    });
}

async function checkProduct(status) {
    const result = document.getElementById("productResult");

    try {
        const message = await checkAvailability(status);
        result.innerHTML = message;
    } catch (error) {
        result.innerHTML = error;
    }
}


// =================================
// TASK 3 - LOGIN VALIDATION
// =================================

function login(email, password) {
    return new Promise((resolve, reject) => {
        if (
            email === "gokul@gmail.com" &&
            password === "12345"
        ) {
            resolve("Login Successful!");
        } else {
            reject("Invalid Email or Password");
        }
    });
}

async function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("loginResult");

    try {
        const message = await login(email, password);
        result.innerHTML = message;
    } catch (error) {
        result.innerHTML = error;
    }
}


// =================================
// TASK 4 - ATM WITHDRAWAL
// =================================

function withdrawMoney(balance, amount) {
    if (amount <= 0) {
        throw new Error("Invalid Withdrawal Amount");
    }

    if (amount > balance) {
        throw new Error("Insufficient Balance");
    }

    return balance - amount;
}

function withdraw() {
    const balanceInput = document.getElementById("balance").value;
    const amountInput = document.getElementById("amount").value;
    const result = document.getElementById("atmResult");

    try {
        if (balanceInput === "" || amountInput === "") {
            throw new Error("Please enter both values");
        }

        const balance = Number(balanceInput);
        const amount = Number(amountInput);

        const remaining = withdrawMoney(balance, amount);

        result.innerHTML =
            "Withdrawal Successful!" +
            "<br>Remaining Balance: " + remaining;

    } catch (error) {
        result.innerHTML = "Error: " + error.message;

    } finally {
        result.innerHTML += "<br>Transaction Completed";
    }
}


// =================================
// TASK 5 - EMPLOYEE VALIDATION
// =================================

function validateEmployee(employee) {
    if (!employee.name || employee.name.trim() === "") {
        throw new Error("Employee Name is Required");
    }

    if (!employee.email || !employee.email.includes("@")) {
        throw new Error("Invalid Employee Email");
    }

    if (
        !Number.isFinite(employee.salary) ||
        employee.salary <= 0
    ) {
        throw new Error("Invalid Employee Salary");
    }

    return "Employee Data is Valid";
}

function checkEmployee() {
    const employee = {
        name: document.getElementById("name").value,
        email: document.getElementById("empEmail").value,
        salary: Number(document.getElementById("salary").value)
    };

    const result = document.getElementById("employeeResult");

    try {
        const message = validateEmployee(employee);
        result.innerHTML = message;

    } catch (error) {
        result.innerHTML = "Error: " + error.message;

    } finally {
        result.innerHTML += "<br>Employee Validation Completed";
    }
}


// =================================
// TASK 6 - NUMBER DIVISION
// =================================

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot Divide by Zero");
    }

    return a / b;
}

function calculate() {
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;

    const result = document.getElementById("divisionResult");

    try {
        if (num1Input === "" || num2Input === "") {
            throw new Error("Please enter both numbers");
        }

        const a = Number(num1Input);
        const b = Number(num2Input);

        const answer = divideNumbers(a, b);

        result.innerHTML = "Division Result: " + answer;

    } catch (error) {
        result.innerHTML = "Error: " + error.message;

    } finally {
        result.innerHTML += "<br>Calculation Completed";
    }
}
