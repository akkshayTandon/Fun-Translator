// import { useState } from "react"

/* eslint-disable react/prop-types */

function Sender({ textValue, senderValue }) {

    // const [sendText, setSendText] = useState("");

    // const handleClick = async (translation, textValue) => {
    //     const response = await fetch(`https://api.funtranslations.com/translate/${translation}.json?text=${textValue}`);
    //     const data = await response.json();
    //     translatedText(data.contents.translated);
    //     // console.log(data.contents.translated)
    // }

    return (
        <div>
            <textarea value={textValue} onChange={(e) => senderValue(e.target.value)} name="senderText" id="senderText" cols="30" rows="10" placeholder="sender" style={{"fontSize": "large"}}></textarea>
        </div>
    )
}

export default Sender