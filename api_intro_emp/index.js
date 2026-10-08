const express = require("express");

const app = express();

app.use(express.json());

// Dummy Data
let employees = [
    {
        id: 1,
        name: "Ali",
        department: "IT",
        salary: 70000,
        experience: 2,
        status: "active",
    },
    {
        id: 2,
        name: "Ahmed",
        department: "HR",
        salary: 60000,
        experience: 3,
        status: "active",
    },
    {
        id: 3,
        name: "Sara",
        department: "IT",
        salary: 90000,
        experience: 5,
        status: "inactive",
    },
    {
        id: 4,
        name: "Ayesha",
        department: "Finance",
        salary: 80000,
        experience: 4,
        status: "active",
    },
];

// ======================================
// GET ALL EMPLOYEES
// ======================================

app.get("/api/employees", (req, res) => {
  if (employees.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No employees found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Employees fetched successfully",
    employees,
  });
});


// ======================================
// SEARCH EMPLOYEE BY NAME
// ======================================

app.get("/api/employees/search", (req, res) => {
    
    const { name } = req.query;
    console.log(name)
    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required",
        });
    }

    const result = employees.filter((emp) =>
        emp.name.toLowerCase().includes(name.toLowerCase())
    );

    if (result.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No employees found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Employees fetched successfully",
        employees: result,
    });
});

// ======================================
// EMPLOYEE STATISTICS
// ======================================

// app.get("/api/employees/stats", (req, res) => {
//     const totalEmployees = employees.length;

//     const activeEmployees = employees.filter((emp) => emp.status === "active").length;

//     const inactiveEmployees = employees.filter((emp) => emp.status === "inactive").length;

//     const totalSalary = employees.reduce((total, emp) => total + emp.salary,0);

//     const averageSalary =
//         totalEmployees > 0
//             ? totalSalary / totalEmployees
//             : 0;

//     const highestSalary =
//         totalEmployees > 0
//             ? Math.max(...employees.map((emp) => emp.salary))
//             : 0;

//     res.status(200).json({
//         totalEmployees,
//         activeEmployees,
//         inactiveEmployees,
//         averageSalary,
//         highestSalary,
//     });
// });


// ======================================
// GET SINGLE EMPLOYEE
// ======================================

app.get("/api/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    const employee = employees.find((emp) => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Employee fetched successfully",
        employee,
    });
});


// ======================================
// FILTER BY DEPARTMENT / STATUS / SALARY
// ======================================

app.get("/api/employees/filter", (req, res) => {
    const { department, status, minSalary, maxSalary } = req.query;

    let result = employees;

    // Department filter
    if (department) {
        result = result.filter(
            (emp) =>
                emp.department.toLowerCase() === department.toLowerCase()
        );
    }

    // Status filter
    if (status) {
        result = result.filter(
            (emp) => emp.status.toLowerCase() === status.toLowerCase()
        );
    }

    // Minimum salary
    if (minSalary) {
        result = result.filter((emp) => emp.salary >= Number(minSalary));
    }

    // Maximum salary
    if (maxSalary) {
        result = result.filter(
            (emp) => emp.salary <= Number(maxSalary)
        );
    }

    res.status(200).json(result);
});

// ======================================
// GET EMPLOYEES BY DEPARTMENT
// ======================================

app.get("/api/employees/department/:department", (req, res) => {
    const department = req.params.department;

    const result = employees.filter(
        (emp) =>
            emp.department.toLowerCase() === department.toLowerCase()
    );

    res.status(200).json(result);
});

// ======================================
// GET EMPLOYEES BY STATUS
// ======================================

app.get("/api/employees/status/:status", (req, res) => {
    const status = req.params.status;

    const result = employees.filter(
        (emp) => emp.status.toLowerCase() === status.toLowerCase()
    );

    res.status(200).json(result);
});

// ======================================
// ADD NEW EMPLOYEE
// ======================================

app.post("/api/employees", (req, res) => {
    const {
        name,
        department,
        salary,
        experience,
        status,
    } = req.body;

    // Required fields
    if (
        !name ||
        !department ||
        salary === undefined ||
        experience === undefined ||
        !status
    ) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    // Salary validation
    if (Number(salary) <= 0) {
        return res.status(400).json({
            message: "Salary must be greater than 0",
        });
    }

    // Experience validation
    if (Number(experience) < 0) {
        return res.status(400).json({
            message: "Experience cannot be negative",
        });
    }

    // Status validation
    if (!["active", "inactive"].includes(status.toLowerCase())) {
        return res.status(400).json({
            message: "Status must be active or inactive",
        });
    }

    // Generate ID
    const newId =
        employees.length > 0
            ? employees[employees.length - 1].id + 1
            : 1;

    const newEmployee = {
        id: newId,
        name,
        department,
        salary: Number(salary),
        experience: Number(experience),
        status: status.toLowerCase(),
    };

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee added successfully",
        employee: newEmployee,
    });
});

// ======================================
// UPDATE EMPLOYEE
// ======================================

app.put("/api/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    const employee = employees.find((emp) => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found",
        });
    }

    const {
        name,
        department,
        salary,
        experience,
        status,
    } = req.body;

    // Validation
    if (salary !== undefined && Number(salary) <= 0) {
        return res.status(400).json({
            message: "Salary must be greater than 0",
        });
    }

    if (experience !== undefined && Number(experience) < 0) {
        return res.status(400).json({
            message: "Experience cannot be negative",
        });
    }

    if (
        status !== undefined &&
        !["active", "inactive"].includes(status.toLowerCase())
    ) {
        return res.status(400).json({
            message: "Status must be active or inactive",
        });
    }

    // Update only provided fields
    if (name !== undefined) employee.name = name;
    if (department !== undefined) employee.department = department;
    if (salary !== undefined) employee.salary = Number(salary);
    if (experience !== undefined)
        employee.experience = Number(experience);
    if (status !== undefined)
        employee.status = status.toLowerCase();

    res.status(200).json({
        message: "Employee updated successfully",
        employee,
    });
});

// ======================================
// DELETE EMPLOYEE
// ======================================

app.delete("/api/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    const employee = employees.find(
        (emp) => emp.id === id
    );

    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found",
        });
    }

    employees = employees.filter(
        (emp) => emp.id !== id
    );

    return res.status(200).json({
        success: true,
        message: "Employee deleted successfully",
        employee,
    });
});

// ======================================
// SERVER
// ======================================

app.listen(3000, () => {
    console.log("Server running on port 3000");
});