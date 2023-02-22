const db=require('../database');

const borrower={
    getAllBorrowers:function(callback){
        return db.query("select * from borrower", callback);
    },
    getOneBorrower:function(id, callback){
        return db.query("select * from borrower where id_borrower=?",[id], callback);
    },
    addBorrower:function(addData, callback){
        return db.query("insert into borrower(firstname, lastname, phone, streetaddress, postalcode) values(?,?,?,?,?)", [addData.firstname, addData.lastname, addData.phone, addData.streetaddress, addData.postalcode], callback);
    },
    updateBorrower:function(id,updateData,callback){
        return db.query("update borrower set firstname=?, lastname=?, phone=?, streetaddress=?, postalcode=? where id_borrower=?",[updateData.firstname, updateData.lastname, updateData.phone, updateData.streetaddress, updateData.postalcode, id], callback);
    },
    deleteBorrower:function(id, callback){
        return db.query("delete from borrower where id_borrower=?", [id], callback)
    }
}

module.exports=borrower;