import ApiUtils from "../util/ApiUtils";

class HttpService {

    // TODO move this to a config file
    apiBasePath = "http://207.154.213.99:7070";

    get(url) {

        return fetch(this.apiBasePath + url)
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);
    }

}

export let httpService = new HttpService();