// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Sender from './components/sender/sender'
import Reciever from './components/reciever/reciever'
import { useState } from 'react'

function App() {

  const [language, setLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState("");
  const [sendText, setSendText] = useState("");
  function getLanguage(lang) {
    setLanguage(lang);
  }

  function getTranslation(translated) {
    setTranslatedText(translated)
    // console.log(translated);
  }
  // console.log(language);
  function senderValue(text) {
    setSendText(text);
  }

  const handleClick = async (translation, textValue) => {

      const response = await fetch(`https://api.funtranslations.com/translate/${translation}.json?text=${textValue}`);
      const statusCode = response.status;
      const data = await response.json();

      if(statusCode !== 200){
        // console.log(data.error.code)
        alert(data.error.message)
        // setTranslatedText(data.contents.translated)
      }
      // translatedText(data.contents.translated);
      setTranslatedText(data.contents.translated)
      // console.log(data.contents.translated)
  }

  const buttonStyle = {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "large"
  }

  return (
    <>
      <Navbar selectedLanguage={getLanguage}></Navbar>
      <Sender translateLanguage={language} translatedText={getTranslation} textValue={sendText} senderValue={senderValue}></Sender>
      <button onClick={() => handleClick(language, sendText)} style={buttonStyle}>Translate</button>
      <Reciever translatedText={translatedText}></Reciever>
    </>
  )
}

export default App
