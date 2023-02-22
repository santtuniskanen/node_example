const db=require('../database');
const bcrypt=require('bcryptjs');

const saltRounds = 10;

const user={
    getAllUsers:function(callback){
        return db.query("select * from user_table", callback);
    },
    getOneUser:function(id, callback){
        return db.query("select * from user_table where id_user=?",[id], callback);
    },
    addUser:function(addData, callback){
        bcrypt.hash(addData.password, saltRounds, function(error, cryptedPassword){
            return db.query("insert into user_table(username, password) values(?,?)", [addData.username, cryptedPassword], callback);
        });
    },
    updateUser:function(id,updateData,callback){
        bcrypt.hash(updateData.password, saltRounds, function(error, cryptedPassword){
            return db.query("update user_table set username=?, password=? where id_user=?", [updateData.username, cryptedPassword, id], callback);
        });
    },
    deleteUser:function(id, callback){
        return db.query("delete from user_table where id_user=?", [id], callback)
    }
}

module.exports=user;