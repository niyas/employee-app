const db = require('./../../config/db');
const jwt = require('jwt');


'use strict';

var util = require('util');


module.exports = {
    postUserRegistration: postUserRegistration,
    login: login
};

/*
  Functions in a127 controllers used for operations should take two parameters:
 */
function postUserRegistration(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  const name = req.swagger.params.name.value,
        UserName = req.swagger.params.UserName.value,
        Password = req.swagger.params.Password.value;
     
  let result = db.query('insert name, UserName, Password into values (${name}, ${userName}, ${Password})')

  // this sends back a JSON response which is a single string
  res.json(result);
}


/*
  Functions in a127 controllers used for operations should take two parameters:
 */
function login(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    
    const UserName = req.swagger.params.UserName.value,
          Password = req.swagger.params.Password.value;
    
    if(UserName && Password){
        let result = db.query('select * from users where userName=${UserName} and Password = ${Password})')
        res.json(result);
    }
  }

