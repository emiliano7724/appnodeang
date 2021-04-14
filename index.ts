import Server from './class/server';
import userRoutes from './routes/usuarios';
import mysql from 'mysql';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

//Creando servidor Web

const server = new Server();
server.start(()=>{

    console.log(`Servidor corriendo en puerto  ${server.puerto}`);
    });
//Rutas aplicacion

server.app.use('/users', userRoutes);

//Connection Mysql
const connection = mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DBNAME,
port:3306


});
connection.connect((error)=>{
if (error) {
    throw error
} else {
    console.log("Bd Conectada")
}
});

//Connection Mongoose
mongoose.connect('mongodb://localhost:27017/cursofe',
{useNewUrlParser:true,useCreateIndex:true},
    (error)=>{
        if (error) {
            throw error
        }else{
            console.log("App conectada a mongo")
        }
    }

)
  