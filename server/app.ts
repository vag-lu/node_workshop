import * as express from 'express';
import database from './db';
import Controller from './controller';
import * as bodyparser from 'body-parser';

class App {

    public app: express.Application;
    public database: database;
    public controller: Controller

    constructor() {
        this.app = express();
        this.database = new database();
        this.database.createConnection();        
        this.controller = new Controller();
        this.midlleware();
        this.route();
    }

    midlleware() {
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: true }));
    }

    route() {
        this.app.route('/').get((req, res) => res.status(200).json({
            "result": "Hello World"
        }));

        this.app.route('/api/crushs').post((req, res) => this.controller.create(req, res))
    }
}

export default new App();