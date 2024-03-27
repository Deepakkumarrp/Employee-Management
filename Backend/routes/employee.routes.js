const express = require("express");
const { Employee } = require("../models/employee.model");
const Employeerouter = express.Router();



// Create Employee
Employeerouter.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read Employees with Pagination, Filtering, Sorting, and Searching
Employeerouter.get('/', async (req, res) => {
    try {
      let { page = 1, limit = 5, department, sortBy, search } = req.query;
      page = parseInt(page);
      limit = parseInt(limit);
      
      const query = {};
      if (department) {
        query.department = department;
      }
      if (search) {
        query.firstName = { $regex: search, $options: 'i' };
      }
      const sortOptions = {};
      if (sortBy) {
        sortOptions[sortBy] = 1;
      }
      const employees = await Employee.find(query)
        .sort(sortOptions)
        .limit(limit)
        .skip((page - 1) * limit);
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Update Employee
Employeerouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Employee
Employeerouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {Employeerouter};
