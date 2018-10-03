import {
    FETCH_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
    message: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_MESSAGE:
            const message = action.payload;
            return {
                ...state,
                message
            };
            break;
        default:
            return state;
    }
}