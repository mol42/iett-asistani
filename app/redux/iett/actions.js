export const CHECK_IF_BUS_PASSES_SUCCESS = "CHECK_IF_BUS_PASSES_SUCCESS";

import {httpService} from "../../services/HttpService";

export const checkIfBusPasses = (busCode) => {

    return (dispatch) => {
        httpService.get(`/checkBusWithStation?busCode=${busCode}&stationCode=206492`)
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