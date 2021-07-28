//============
//Puerto
//====================

process.env.PORT = process.env.PORT || 3000;




// ====================
// Entorno
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================
// Vencimiento Tokane
// ====================
//60 segundos
// 60 minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ====================
// SEED de autenticación
// ====================
process.env.SEED = process.env.SEED || "semilla_DESARROLLO";

// ================================
// BASE DE DATOS
// ===========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/cafe';
} else {
    //MONGODB_URI = "mongodb://xxx:xxx@cluster0-shard-xxx.mongodb.net:xxx,cluster0-shard-xxx.mongodb.net:xxx,cluster0-shard-xxx.mongodb.net:xxx/xxx?replicaSet=xxx&ssl=true&authSource=admin"

}

// ================================
// GOOGLE CLIENT ID 
// ===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '924724390226-1sdldn87vh9s280k0a4j7ofctfak40uq.apps.googleusercontent.com';