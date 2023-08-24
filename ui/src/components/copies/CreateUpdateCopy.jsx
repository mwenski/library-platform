import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { BsPencilSquare } from "react-icons/bs";
import { createCopy, updateCopy } from "../../services/CopyService";

function CreateUpdateCopy({ copy, bookId,  }){
    const [signature, setSignature] = useState("");
    const [placeSymbol, setPlaceSymbol] = useState("");

    useEffect(() => {
        if(copy){
           setSignature(copy.signature); 
        }
    }, [copy]);

    function addCopy(){
        const copy = {
            bookId: bookId,
            signature: signature
        }

        createCopy(copy).then((res) => {
            console.log(res);
        })
    }

    function updCopy(){
        const _copy = {
            copyId: copy.copyId,
            bookId: copy.bookId,
            signature: signature
        }

        updateCopy(_copy).then((res) => {
            console.log(res);
        })
    }

    let handleSubmit = (e) => {
        if(bookId){
            addCopy();
        }else{
            updCopy();
        }
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