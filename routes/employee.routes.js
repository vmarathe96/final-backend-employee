const express = require('express')

const router = express.Router()

const controller = require('../controllers/employee.controller')

// const tempController = require('../controllers/emp.controller')


router.post('/employee/addEmployee', controller.addEmp)
router.get('/employee/getAllEmployees',controller.getAll)
router.get('/employee/getEmployeebyId/:id',controller.getById)
router.put('/employee/updateById/:id',controller.updateById)
router.delete('/employee/deleteEmployeebyId/:id',controller.deleteById)


module.exports = router