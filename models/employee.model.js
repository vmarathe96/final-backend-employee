const bcrypt = require('bcrypt')

module.exports = mongoose => {
    var EmployeeSchema = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
    )
   
    
    const EmployeeModel = mongoose.model("employee",EmployeeSchema)

    return EmployeeModel

}