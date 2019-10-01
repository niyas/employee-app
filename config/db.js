const mysql = require('mysql');

global.db={};
const config = {
    'host': '',
    'port': '',
    'username': '',
    'password': '',
    'database': 'rest-task';
};

function initConnection(req, res){
 return new Promise((resolve, reject) =>{
     db = mysql.connect(config);
     resolve(db)
 }
}