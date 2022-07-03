const db = require("../models")

const EmployeeDbModel = db.employee

// Create
exports.addEmp = (req, res) => {
    let {name,email,password,address,mobile} = req.body
    EmployeeDbModel.create({
        name,
        email,
        mobile,
        address,
        password
    },(error,result)=>{
        if(error){
            res.json({
                message: "Error while saving employee",
                error: error
            })
        }
        else {
            res.json({
                status:200,
                data:result
            })
        }
    })
  };

// Get All
exports.getAll = (req,res,next) =>{
    EmployeeDbModel.find({},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"success",
            message:"Successfully Retrieved all the employees",
            data:{
                emp:result
            }
        })
    })
}
// Get By ID
exports.getById = (req,res,next) =>{

    EmployeeDbModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved employee By Id",
            data:{
                employee: result
            }
        })
    })
} 

// Update
exports.updateById = (req,res,next) =>{
    EmployeeDbModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated employee By Id",
            data:{
                employee: result
            }
        })
    })

}
// Delete By Id
exports.deleteById = (req,res,next) =>{
    EmployeeDbModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted employee By Id",
            data:{
                employee: result
            }
        })
    })
}