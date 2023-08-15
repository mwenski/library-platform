import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { createCopy, updateCopy } from "../../services/CopyService";

function CreateUpdateCopy(props){
    const [signature, setSignature] = useState("");
    const [placeSymbol, setPlaceSymbol] = useState("");

    useEffect(() => {
        if(props.copy){
           setSignature(props.copy.signature); 
        }
    }, [props.copy]);

    function addCopy(){
        const copy = {
            bookId: props.bookId,
            signature: signature
        }

        createCopy(copy).then((res) => {
            console.log(res);
        })
    }

    function updCopy(){
        const copy = {
            copyId: props.copy.copyId,
            bookId: props.copy.bookId,
            signature: signature
        }

        updateCopy(copy).then((res) => {
            console.log(res);
        })
    }

    let handleSubmit = (e) => {
        if(props.bookId){
            addCopy();
        }else{
            updCopy();
        }
    }

    return(
        <div>
            <Popup trigger={<button className="button-update">{props.bookId ? "Add a copy!" : "Update"}</button>} modal nested>
                {
                    close => (
                        <div className="popup">
                            <button id="close-button" onClick={() => {close()}}>X</button>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Signature</label>
                                    <input type="text" value={signature} placeholder="Signature" onChange={(e) => setSignature(e.target.value)} />
                                </div>
                                <div>
                                    <label>Place symbol</label>
                                    <input type="text" value={placeSymbol} placeholder="Signature" onChange={(e) => setPlaceSymbol(e.target.value)} />
                                </div>
                                <div>
                                    <button className="button-library" type="submit">{props.bookId ? "Create" : "Update"}</button>
                                </div>
                            </form>
                        </div>
                    )
                }
            </Popup>
        </div>
    );
}

export default CreateUpdateCopy;