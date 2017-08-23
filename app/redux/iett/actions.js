export const CHECK_IF_BUS_PASSES_SUCCESS = "CHECK_IF_BUS_PASSES_SUCCESS";

import {httpService} from "../../services/HttpService";

export const checkIfBusPasses = () => {

    return (dispatch) => {
        httpService.get("http://207.154.213.99:7070/checkBusWithStation?busCode=130&stationCode=206492")
            .then((response) => {
                dispatch(setBusPasses(response.data));
            })
            .catch((err) => {
                dispatch(setBusPasses(false));
            });
    }
}

export const setBusPasses = (passesFlag) => {
    return {
        type : CHECK_IF_BUS_PASSES_SUCCESS,
        payload : passesFlag
    }
}