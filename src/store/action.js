function CurrentUser(data, props) {
    // console.log(data)
    return (dispatch) => {     
        dispatch({ type: "SETCURRENT", payload: data });
    };
}

const GET_ALL_USER_INFO_REQUEST_SUCCESS = 'users/GET_ALL_USER_INFO_REQUEST_SUCCESS'
const GET_ALL_USER_INFO_REQUEST = 'users/GET_ALL_USER_INFO_REQUEST'
export {
    CurrentUser,
    GET_ALL_USER_INFO_REQUEST_SUCCESS,
    GET_ALL_USER_INFO_REQUEST
}