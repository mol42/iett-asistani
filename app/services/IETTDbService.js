const IETTDbProvider = require("./IETTDbProvider");

class IETTDbService {

    constructor() {
        this.iettDBProvider = new IETTDbProvider();
        this.db = this.iettDBProvider.getDb();
    }

    initialize() {
        return this.iettDBProvider.initialize();
    }

    getStationInfoList() {

        const stationListCollection = this.db.getCollection("stationListCollection");
        const stationInfoList =  stationListCollection.find({ 'code': { '$ne': null } });
        return stationInfoList;
    }

    getStationInfoListForBus(busCode) {

        const busStationInfoCollection = this.db.getCollection('busStationInfoCollection');
        const busStationResultList = busStationInfoCollection.find({ 'busCode': { '$eq': busCode } });

        if (busStationResultList && busStationResultList.length > 0) {
            return busStationResultList[0];
        }
        return null;
    }
    
    getBusStationInfoList() {
        
        const busStationInfoCollection = this.db.getCollection("busStationInfoCollection");
        const busStationInfoList = busStationInfoCollection.find({ 'busCode': { '$ne': null } });
        return busStationInfoList;
    }
}

module.exports = new IETTDbService();