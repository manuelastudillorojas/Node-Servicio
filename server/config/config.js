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
// 
//} else {
urlDB = 'mongodb://localhost:27017/cafe';
//}

process.env.urlDB = urlDB;