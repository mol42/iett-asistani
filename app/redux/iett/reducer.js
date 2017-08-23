import {
    CHECK_IF_BUS_PASSES_SUCCESS
} from "./actions";

const initialState = {
    busPasses : false
};

export const iettReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_IF_BUS_PASSES_SUCCESS :
            state = {
                ...state,
                busPasses : action.payload
            }
            break;
        default:
            break;
    }
    return state;
};