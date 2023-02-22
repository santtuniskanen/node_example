const db=require('../database');

const bookArray=[
    {name:"C++", author:"Teppo Testi", isbn:"12-34-56-77"},
    {name:"JavaScript", author:"Aino Testi", isbn:"12-34-56-77"},
    {name:"Databases", author:"Daniel Datafield", isbn:"12-34-56-77"}
];

const book={
    getAllBooks:function(callback){
        return db.query("select * from book", callback);
    },
    getOneBook:function(id){
        return bookArray[id];
    },
    // The following functions have a risk of SQL Injection,
    // but they are like this only for the demonstration (Will be changed soon)
    addBook:function(addData){
        let sql='insert into book(name,author,isbn) values('+addData.name+','+addData.author+','+addData.isbn+')';
        return sql;
    },
    updateBook:function(id,updateData){
        let sql='update book set name='+updateData.name+', author='+updateData.author+', isbn='+updateData.isbn+' where id_book='+id;
        return sql;
    },
    deleteBook:function(id){
        let sql='delete from book where id_book='+id;
        return sql;
    }
}

module.exports=book;