import { globalNotification } from "../actionTypes";

export const showSnackbarAction = (message, severity) => (dispatch) => {
    dispatch({
        type: globalNotification.SHOW_SNACKBAR,
        payload: {
            message,
            severity
        }
    });
}

export const hideSnackBar = () => (dispatch) => {
    dispatch({
        type: globalNotification.HIDE_SNACKBAR
    });
}