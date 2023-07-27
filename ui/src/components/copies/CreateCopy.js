import React, { useState } from "react";
import { createCopy } from "../../services/CopyService";

function CreateCopy({ id }){
    const [signature, setSignature] = useState("");

    let handleSubmit = (e) => {
        const copy = {
            bookId: id,
            signature: signature
        }

        createCopy(copy).then((res) => {
            console.log(res);
        })
    }

    return(
        <div>
            <h3>Add a copy!</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Signature</label>
                    <input type="text" value={signature} placeholder="Signature" onChange={(e) => setSignature(e.target.value)} />
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateCopy;