import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCopyAction, updateCopyAction } from "../../redux/actions/copyAction";
import { showSnackbarAction } from "../../redux/actions/globalNotificationAction";
import Popup from "reactjs-popup";
import { BsPencilSquare } from "react-icons/bs";

const CreateUpdateCopy = ({ copyId, bookId }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { copiesData } = useSelector(state => state.copy);
    const copy = copiesData.find(copy => copy.copyId === parseInt(copyId));

    const [signature, setSignature] = useState("");
    const [placeSymbol, setPlaceSymbol] = useState("");

    useEffect(() => {
        if(copy){
           setSignature(copy.signature); 
        }
    }, [copy]);

    function createCopy(){
        const newCopy = {
            bookId: bookId,
            signature: signature
        }

        dispatch(
            createCopyAction(
                newCopy,
                () => {
                    dispatch(showSnackbarAction('Copy added', 'success'));
                    navigate(`/book/${bookId}`);
                },
                () => dispatch(
                    showSnackbarAction('Cannot add copy', 'error')
                )
            )
        );
    }

    function updateCopy(){
        const updatedCopy = {
            copyId: copy.copyId,
            bookId: copy.bookId,
            signature: signature
        }

        dispatch(
            updateCopyAction(
                updatedCopy,
                () => {
                    dispatch(showSnackbarAction('Copy updated', 'success'));
                    navigate(`/book/${copy.bookId}`);
                },
                () => dispatch(
                    showSnackbarAction('Cannot update the copy', 'error')
                )
            )
        );
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        if(bookId){
            createCopy();
        }else{
            updateCopy();
        }
        window.location.reload();
    }

    let buttonClass = bookId? "button-create" : "button-edit";
    let buttonText = bookId? "+" : <BsPencilSquare />;
    let buttonTitle = bookId? "Add a copy!" : "Update the copy";

    return(
        
            <Popup trigger={
                <button className={buttonClass} 
                title={buttonTitle}>
                    {buttonText}
                </button>
            } modal nested>
                {
                    close => (
                        <div className="popup">
                            <button id="close-button" 
                            title="Close" 
                            onClick={() => {close()}}>
                                X
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Signature</label>
                                    <input type="text" 
                                    value={signature} 
                                    placeholder="Signature" 
                                    onChange={(e) => setSignature(e.target.value)} />
                                </div>
                                <div>
                                    <label>Place symbol</label>
                                    <input type="text" 
                                    value={placeSymbol} 
                                    placeholder="Signature" 
                                    onChange={(e) => setPlaceSymbol(e.target.value)} />
                                </div>
                                <div>
                                    <button className="button-library" 
                                    type="submit">
                                        {bookId ? "Create" : "Update"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                }
            </Popup>
        
    );
}

export default CreateUpdateCopy;