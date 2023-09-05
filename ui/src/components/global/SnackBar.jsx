import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { hideSnackBar } from "../../redux/actions/globaNotificationAction";

const SnackBar = () => {
    const dispatch = useDispatch();
    const { show, message, severity } = useSelector(state => state.globalNotification.snackbar);

    useEffect(() => {
        setTimeout(() => {
            dispatch(
                hideSnackBar()
            )
        }, 5000)
    }, [])

    if(show){
        return(
            <div>
                {message}
            </div>
        )
    }
}

export default SnackBar;