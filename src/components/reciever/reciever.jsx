
/*eslint-disable react/prop-types */

function Reciever({ translatedText }) {
    return (
        <div>
            <textarea value={translatedText} name="recieverText" id="recieverText" cols="30" rows="10" placeholder="reciever" style={{"fontSize": "large"}} readOnly></textarea>
        </div>
    )
}

export default Reciever