//============
//Puerto
//====================

process.env.PORT = process.env.PORT || 3000;




// ====================
// Entorno
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ================================
// BASE DE DATOS
// ===========================

let urlDB;


//if (process.env.NODE_ENV === 'dev') {
//  urlDB = 'mongodb://localhost:27017/cafe';
//} else {
urlDB = 'mongodb+srv://Admin:SKJ7qDHhbTH8ttl3@cluster0.a7v8q.mongodb.net/cafe';
//}

process.env.urlDB = urlDB;