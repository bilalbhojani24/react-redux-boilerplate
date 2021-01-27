import axios from 'axios';
export const dataAction = {
    getData,
};

function getData() {

    return dispatch => {

        dispatch(request());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    dispatch(failure(response));
                    console.log(response);
                }
            ).catch(error => {
            dispatch(failure(error));
        });
    };

    function request() { return { type: 'REQUEST_DATA' }}
    function success(data) { return { type: 'RECEIVE_DATA', payload : data }}
    function failure(error) { return { type: 'ERROR_DATA', error }}
}
