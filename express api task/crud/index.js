const express = require("express")
const app = express()
app.use(express.json())

let employees = []

//=====================
// create employee
//=====================
app.post("/add-employee", (req, res) => {
    const { id, name, dept } = req.body

    if (!id || !name || !dept) {
        return res.status(400).json({
            message: "all fields are require"
        })
    }
    const emp = employees.find(e => e.id == id)
    if (emp) {
        return res.status(400).json({
            message: "id already exist"
        })

    }
    const newEmployee = {
        id,
        name,
        dept
    }
    employees.push(newEmployee)

    return res.status(201).json({
        message: "employee create successfull",
        newEmployee
    })
})

//=====================
// get all employees
//=====================
app.get("/employees", (req, res) => {
    return res.status(200).json({
        message: "employees records",
        total_employees: employees.length,
        employees

    })
})

//=====================
// update employee
//=====================

app.put("/update-employees", (req, res) => {
    const { id, name, dept } = req.body
    
    if (!id) {
        return res.status(400).json({
            message: "employee id is required"
        });
    }
    
    const emp = employees.find(e => e.id == id)
    if (!emp) {
        return res.status(404).json({
            message: "employee not found"
        });
    }
    emp.name = name ? name : emp.name
    emp.dept = dept ? dept : emp.dept
    
    return res.status(200).json({
        message: "employees update successfull",
        employees: emp
        
    })
})

//=====================
// delete employee
//=====================
app.delete("/delete-employee/:id", (req, res) => {
    const {id} = req.params
    console.log(typeof employees[0].id)
    console.log(typeof id)
    const empId = Number(id)
    console.log(empId)

    if (!id) {
        return res.status(400).json({
            message: "employee id is required"
        });
    }

     employees = employees.filter(e => e.id !== empId)
    

    return res.status(200).json({
        message: "employees deleted successfull",
        total_employees:employees.length,
        modify_employess:employees

    })
})


app.listen(200, () => console.log(`server run on port 200`))