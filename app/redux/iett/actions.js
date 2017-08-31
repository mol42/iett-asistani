export const CHECK_IF_BUS_PASSES_SUCCESS = "CHECK_IF_BUS_PASSES_SUCCESS";
export const SET_ACTIVE_REGION = "SET_ACTIVE_REGION";

import {httpService} from "../../services/HttpService";
import iettDbService from "../../services/IETTDbService";

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

export const updateActiveRegion = ({latitude, longitude}) => {

    return (dispatch) => {

        httpService.get(`/findStationsAround?latitude=${latitude}&longitude=${longitude}`)
            .then((response) => {
                dispatch(setActiveRegion(response.data));
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

export const setActiveRegion = (regionData) => {
    return {
        type : SET_ACTIVE_REGION,
        payload : regionData
    }
}