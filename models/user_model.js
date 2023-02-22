const db=require('../database');

const user={
    getAllusers:function(callback){
        return db.query("select * from user", callback);
    },
    getOneuser:function(id, callback){
        return db.query("select * from user where id_user=?",[id], callback);
    },
    adduser:function(addData, callback){
        return db.query("insert into user(username, password) values(?,?)", [addData.username, addData.password], callback);
    },
    updateuser:function(id,updateData,callback){
        return db.query("update user set name=?, author=?, isbn=? where id_user=?",[updateData.name, updateData.author, updateData.isbn, id], callback);
    },
    deleteuser:function(id, callback){
        return db.query("delete from user where id_user=?", [id], callback)
    }
}

module.exports=user;