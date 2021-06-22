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

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //MONGODB_URI = "mongodb://xxx:xxx@cluster0-shard-xxx.mongodb.net:xxx,cluster0-shard-xxx.mongodb.net:xxx,cluster0-shard-xxx.mongodb.net:xxx/xxx?replicaSet=xxx&ssl=true&authSource=admin"

    urlDB = process.env.MONGODB_URL;
}

process.env.urlDB = urlDB;