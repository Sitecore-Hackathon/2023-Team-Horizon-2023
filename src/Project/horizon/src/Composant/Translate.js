import React, { useState, useEffect } from 'react';
import {Form,TextArea } from 'semantic-ui-react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import openAI from '../config';

const Translate = () =>  {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [selectedLanguageName, setLanguageName] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    const [detectLanguageKey, setdetectedLanguageKey] = useState('')
    const getLanguageSource = () => {
        axios.post(`${process.env.REACT_APP_LIBRE_BASEURL}/detect`, {
            q: inputText
        })
        .then((response) => {
            setdetectedLanguageKey(response.data[0].language)
        })
    }
    const libreTranslateText = () => {
        setResultText(inputText)

        getLanguageSource();

        let data = {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }
        axios.post(`${process.env.REACT_APP_LIBRE_BASEURL}/translate`, data)
        .then((response) => {
            setResultText(response.data.translatedText)
        })
    }

    const openAiTranslate = async () => {        
        const completion = await openAI.createCompletion({
            model: "text-davinci-003",
            prompt: `translate ${inputText}?? in ${selectedLanguageName}`,
            temperature: 0.8,
            max_tokens: 2048,
        });

        setResultText(completion.data?.choices?.[0]?.text.trim());
    }

    const handleLanguageSelection = (selectedLanguage) => {
        setLanguageName(selectedLanguage.target.value);
    }

    useEffect(() => {
       axios.get(`${process.env.REACT_APP_LIBRE_BASEURL}/languages`)
       .then((response) => {
        setLanguagesList(response.data)
       })

       getLanguageSource()
    }, [inputText])
    return (
        <div>
            <div className="app-header">
                <h4 className="header">Translate</h4>
            </div>

            <div className='app-body'>
                <div>
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Original copy text to translate..'
                            onChange={(e) => setInputText(e.target.value)}
                        />

                        <select className="language-select" onChange={handleLanguageSelection}>
                            <option>Translate to?</option>
                            {languagesList.map((language) => {
                                return (
                                    <option value={language.name}>
                                        {language.name}
                                    </option>
                                )
                            })}
                        </select>

                        <Form.Field
                            control={TextArea}
                            placeholder='Output translated text will go here'
                            value={resultText}
                        />

                        <Button variant="outline-light" onClick={openAiTranslate} >
                            Translate
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}


export default Translate;