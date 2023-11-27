
/* eslint-disable react/prop-types */

function Dropdown({ selectedLanguage }) {
    const options = ['minion', 'pirate', 'yoda', 'morse', 'shakespeare', 'russian-accent', 'numbers', 'mandalorian'];

    return (
        <>
            <select name="option-list" id="languages" onChange={(e) => selectedLanguage(e.target.value)} defaultValue={'Select a language'}>
                <option value="Select a language" disabled>Select...</option>
                {options.map((option) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </>
    )
}

export default Dropdown