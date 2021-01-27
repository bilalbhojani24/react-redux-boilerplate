const initialState = {
        loading : true,
        error: false,
        data: [],
    },
   getUserReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'REQUEST_DATA':
            return {
                ...state,
                loading: true
            };
        case 'RECEIVE_DATA':
            return Object.assign({}, state, {
                    loading: false,
                    error: false,
                    data: action.payload
                });
        case 'ERROR_DATA':
            return {
                 ...state,
                 loading: false,
                 error: true
            };
        default:
            return state;
    }
}

export default getUserReducer;

