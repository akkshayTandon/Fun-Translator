import Dropdown from "../dropdown/dropdown"

/* eslint-disable react/prop-types */

function Navbar({ selectedLanguage }) {
    // const options = ['minion', 'pirate', 'yoda'];

    // function onChangeHandler(e) {
    //     // setOptions(e.target.value)
    //     // console.log(e.target.value)
    //     selectedLanguage(e.target.value)
    // }

    const mystyle = {
        color: "greenyellow",
        fontStyle: "oblique",
        fontFamily: "cursive"
      };

    return (
        <nav>
            <ul type="none">
                <li style={mystyle}><h2>Fun Translator</h2></li>
                <li style={{"fontSize": "large"}}>
                    <label htmlFor="languages">Language: </label>
                    {/* <select name="option-list" id="languages" onChange={(e) => selectedLanguage(e.target.value)} defaultValue={'Select a language'}>
                        <option value="Select a language" disabled>Select...</option>
                        {options.map((option) => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select> */}
                    <Dropdown selectedLanguage={selectedLanguage}></Dropdown>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar