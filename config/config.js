module.exports = {
    port: process.env.PORT || 3000, //escoja el puerto si no hay uno definido conectece al 3000
    //urlDb: process.env.MONGODB || 'mongodb://localhost:27017/web', // si hay puerto configurado en MONGODB ingrese si no ingrese al link
    urlDb: process.env.MONGODB || 'mongodb+srv://cesar:1234@modulo3.trd86.mongodb.net/mongobase1?retryWrites=true&w=majority', //se enlaza base con mongo web
    user: 'animax3d@gmail.com', // se enlaza con bk mail.js auth: para manejar user y pwd
    pwd: "J10*" // se enlaza con bk mail.js auth: para manejar user y pwd
}