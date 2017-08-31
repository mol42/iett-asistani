const loki = require("lokijs");
import LokiReactNativeAdapter from 'loki-react-native-asyncstorage-adapter'

const DB_PATH = '../db/iett.json';

class IETTDbProvider {

    constructor() {
        this.db = new loki(DB_PATH, { adapter: new LokiReactNativeAdapter() });
    }

    initialize() {

        return new Promise((resolve, reject) => {
            this.db.loadDatabase({}, function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    getDb() {
        return this.db;
    }
}

module.exports = IETTDbProvider;