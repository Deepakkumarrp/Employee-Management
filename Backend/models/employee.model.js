const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    enum: ['Tech', 'Marketing', 'Operations'],
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
},{
  versionKey : false
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Employee
}
