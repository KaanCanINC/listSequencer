import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as helper from '../../services/helper';
import Button from '../../components/Button';
import { LuListOrdered, LuCaseUpper, LuCaseLower, LuIterationCcw } from "react-icons/lu";
import { FaRandom, FaSortAlphaDown, FaSortAlphaUpAlt, FaSortAmountUp, FaSortAmountDownAlt } from "react-icons/fa";


const Sorter = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [deleteSpace, setDeleteSpace] = useState(false); // Checkbox durumunu tutmak için state



    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setDeleteSpace(e.target.checked);
    };

    const handleButtonClick = (handler) => {
        setOutputText(handler(inputText, deleteSpace));
    };

    const buttonFunctions = [
        {
            action: () => handleButtonClick(helper.sortToUpperCase),
            label: <LuCaseUpper/>
        },
    ]

    return (
        <div className='sorter'>
            <div className='sorter__wrapper'>
                <div className='sorter__header'>
                    {/* <Link to="/">
                        <h1 className="sorter__logo">SORTIFY</h1>
                    </Link> */}
                    <hr color='black' className='sorter__divider' />
                </div>

                <div className='sorter__content'>
                    <div className="sorter__content--input-container">
                        <textarea
                            value={inputText}
                            className='sorter__content-textarea'
                            onChange={handleInputChange}
                            placeholder="Metin girin..."
                            cols='50'
                            rows='40'
                        ></textarea>
                    </div>

                    <div className="sorter__content--buttons-container">
                        <Button buttons={buttonFunctions} />
                    </div>

                    <label htmlFor="deleteSpace">
                        Boşlukları sil
                        <input
                            type="checkbox"
                            id="deleteSpace"
                            name="boşluk sil"
                            checked={deleteSpace}
                            onChange={handleCheckboxChange}
                        />
                    </label>

                    <div className="sorter__content--output-container output-container">
                        <textarea
                            value={outputText}
                            readOnly
                            className='sorter__content-textarea'
                            placeholder="Listenizin son hali burada görüntülenecek."
                            cols='50'
                            rows='40'
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sorter;
