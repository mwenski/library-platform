import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { hideSnackBar } from "../../redux/actions/globalNotificationAction";

const SnackBar = () => {
    const dispatch = useDispatch();
    const { show, message, severity } = useSelector(state => state.globalNotification.snackbar);

    useEffect(() => {
        if(show){
            setTimeout(function(){
                dispatch(
                    hideSnackBar()
                )
            }, 5000)
        }
    }, [show, dispatch])

    let style;
    if (severity === 'success'){
        style = 'snackbar-success';
    }else if(severity === 'error'){
        style = 'snackbar-error';
    }

    if(show){
        return(
            <div className={style}>
                <p>{message}</p>
            </div>
        )
    }
    return <></>
}

export default SnackBar;