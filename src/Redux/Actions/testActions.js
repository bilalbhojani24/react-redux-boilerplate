
export const testAction = {
    counter,
};
function counter(oldCounter){
    return dispatch => {
        dispatch(success(oldCounter));
    }

    // function request() { return { type: 'REQUEST_COUNTER' }}
    function success(oldCounter) { return { type: 'SET_COUNTER', oldCounter }}
    // function failure(error) { return { type: 'ERROR_COUNTER', error }}
}