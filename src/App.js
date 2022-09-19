
import './styles.css'
import React, { useEffect, useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {

  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  useEffect( () => {
    console.log('language: '+ language);
    console.log('text: '+ text);
  },[language, text])

  return (

    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr />
      <Translate text={text} language={language}/>
    </div>
  );
}
