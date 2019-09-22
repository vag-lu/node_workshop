import * as mongoose from 'mongoose';

class DataBase {

    private url = 'mongodb://127.0.0.1/crushes';
    private connection = mongoose.connection;

    constructor() { }

    createConnection() {
        mongoose.connect(this.url);
        this.connection.on('connected', () => console.log("Mongoose esta conectado"));
    }

    closeConnection() {
        this.connection.close(() => console.log('Mongoose foi desconectado'))
    }
}

export default DataBase;