import {Types} from './actions';

const INITIAL_STATE = {
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.ERROR:
            return {...state, isLoading: false, error: action.payload};
        case Types.REQUEST_RECS:
            return {...state, isLoading: true};
        case Types.RECEIVE_RECS:
            return {
                ...state,
                isLoading: false,
                recordings: action.payload.videos,
                audioRecordings: action.payload.audios,
                images: action.payload.images
            };
        default:
            return {...state};
    }
};
