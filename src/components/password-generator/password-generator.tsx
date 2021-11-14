import './password-generator.css'
import React, { useEffect, useState } from 'react';
import Checkbox from "../checkbox/checkbox";
import { passwordGenerator } from "../../utils";


const PasswordGenerator: React.FC = () => {

    const [length, setLength] = useState(12);
    const [password, setPassword] = useState('');
    const [useSymbols, setUseSymbols] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useLowerCaseLetters, setUseLowerCaseLetters] = useState(true);
    const [useUpperCaseLetters, setUseUpperCaseLetters] = useState(true);


    const generateNewPassword = () => {
        let generated = passwordGenerator(length, useSymbols, useNumbers, useUpperCaseLetters, useLowerCaseLetters);
        setPassword(generated);
    };

    const copyPassword = () => {
        navigator
            .clipboard
            .writeText(password)
            .then(() => {
                console.log('success')
            })
            .catch(() => {
                console.log('error')
            });
    };

    useEffect(() => {
        generateNewPassword();
    }, [length, useSymbols, useNumbers, useLowerCaseLetters, useUpperCaseLetters])


    return (
        <>
            <div className="generator">
                <div className="generator__inner">
                    <span className="generator__title">PASSWORD GENERATOR</span>
                    <div className="generator__options">
                        <div className="generator__option">
                            <Checkbox
                                label="Numbers"
                                checked={useNumbers}
                                onChange={setUseNumbers}
                            />
                        </div>
                        <div className="generator__option">
                            <Checkbox
                                label="Symbols"
                                checked={useSymbols}
                                onChange={setUseSymbols}
                            />
                        </div>
                        <div className="generator__option">
                            <Checkbox
                                label="UpperCase"
                                checked={useUpperCaseLetters}
                                onChange={setUseUpperCaseLetters}
                            />
                        </div>
                        <div className="generator__option">
                            <Checkbox
                                label="LowerCase"
                                checked={useLowerCaseLetters}
                                onChange={setUseLowerCaseLetters}
                            />
                        </div>
                    </div>
                    <div className="generator__starter">
                        <button className="generator__starter-btn" onClick={generateNewPassword}>GENERATE</button>
                    </div>
                    <div className="generator__output">
                        <span className="generator__output-copy" onClick={copyPassword}>COPY</span>
                        <span className="generator__output-result">
                            {
                                password.length > 0 ? password : 'Please select at least one option.'
                            }
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PasswordGenerator;