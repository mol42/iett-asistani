import {
    CHECK_IF_BUS_PASSES_SUCCESS,
    SET_ACTIVE_REGION
} from "./actions";

const initialState = {
    busPasses : false,
    selectedStation : null,
    region : {
        stationList : [],
        activeRegion : null 
    }
};

export const iettReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_IF_BUS_PASSES_SUCCESS :
            state = {
                ...state,
                busPasses : action.payload
            }
            break;
        case SET_ACTIVE_REGION:
        console.log("SET_ACTIVE_REGION action.payload -> ", action.payload);
            state = {
                ...state,
                region : {
                    stationList : action.payload
                }
            }
            break;
        default:
            break;
    }
    return state;
};