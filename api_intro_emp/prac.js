const express = require("express")
const app = express()

app.use(express.json())


let employees = [
    {
        id: 1,
        name: "Samad",
        department: "IT",
        salary: 67000,
        experiance: 2,
        status: "inactive"
    }
]

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
        employees
    });
})

app.post("/api/create-employees", (req, res) => {
    const {
        
        name,
        department,
        salary,
        experiance,
        status
    } = req.body

    if(
        !name ||
        !department ||
        salary === undefined ||
        experiance === undefined ||
        !status
    ){
        return res.status(400).json({
            success: false,
            message: "All Fields are Require",            
        });
    }
    
    if(!["inactive","active"].includes(status.toLowerCase())){
        return res.status(400).json({
            success: false,
            message: "Status must be inactive or active",            
        });
        
    }
    
    if(Number(salary) <= 0){
        return res.status(400).json({
            success: false,
            message: "Salary must be greater 0",            
        });
    }

    if(Number(experiance) <= 0){
        return res.status(400).json({
            success: false,
            message: "Experiance must be greater 0",            
        });
    }

    const newId = employees.length > 0 ? employees[employees.length -1].id + 1 : 1    

    const newEmp = {
        id:newId,
        name,
        department,
        salary:Number(salary),
        experiance:Number(experiance),
        status:status.toLowerCase()
    }
    employees.push(newEmp)

    return res.status(200).json({
        success: true,
        message: "Employees created successfully",
        employees:newEmp
    });
})

app.listen(400,() => console.log("server run on port 400"))