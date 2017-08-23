import ApiUtils from "../util/ApiUtils";

class HttpService {

    get(url) {
        return fetch(url)
            .then(ApiUtils.checkStatus)
            .then(response => response.json())
            .catch(e => e);
    }

}

export let httpService = new HttpService();