import React, { useState } from 'react';
import { Link } from "react-router-dom";
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

    const handleUpperCase = () => {
        let newText = inputText.trim().split("\n");
        if (deleteSpace) {
            newText = newText.filter(item => item !== ''); // Boş satırları kaldır
        }
        setOutputText(newText.join("\n").toUpperCase());
    };

    const handleLowerCase = () => {
        let newText = inputText.trim().split("\n");
        if (deleteSpace) {
            newText = newText.filter(item => item !== ''); // Boş satırları kaldır
        }
        setOutputText(newText.join("\n").toLowerCase());
    };

    const handleSortAToZ = () => {
        let sortedList = inputText.trim().split('\n');
        if (deleteSpace) {
            sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
        }

        sortedList.sort();
        setOutputText(sortedList.join('\n'));
    };
    const handleSortZToA = () => {
        let sortedList = inputText.trim().split('\n');
        if (deleteSpace) {
            sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
        }

        sortedList.sort().reverse();
        setOutputText(sortedList.join('\n'));
    };

    const handleSortRandom = () => {
        let sortedList = inputText.trim().split('\n');
        if (deleteSpace) {
            sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
        }

        sortedList.sort(() => Math.random() - 0.5);
        setOutputText(sortedList.join('\n'));
    }
    const handleOrderedList = () => {
        let sortedList = inputText.trim().split('\n');
        if (deleteSpace) {
            sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
        }

        const orderedList = sortedList.sort().map((item, index) => {
            return `${index + 1}. ${item}`
        })
        setOutputText(orderedList.join('\n'));
    }

    const handleLongest = () => {
        let sortedList = inputText.trim().split('\n');
        if (deleteSpace) {
            sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
        }

        sortedList.sort((a, b) => a.length - b.length).reverse();
        setOutputText(sortedList.join('\n'));
    }

    const handleShortest = () => {
        let sortedList = inputText.trim().split('\n');
        if (deleteSpace) {
            sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
        }
        sortedList.sort((a, b) => a.length - b.length);
        setOutputText(sortedList.join('\n'));
    }

    const handleDeleteSame = () => {
        let sortedList = inputText.trim().split('\n');
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
        sortedList = sortedList.filter((value, index) => sortedList.indexOf(value) === index)
        setOutputText(sortedList.join("\n"));
    }

    const handleClearList = () => {
        setOutputText('')
        setInputText('')

    }
    // Diğer işlevleri buraya ekleyebilirsiniz

    return (
        <div className='sorter'>
            <div className='sorter__wrapper'>
                <div className='sorter__header'>
                    <Link to="/">
                        <h1 className="sorter__logo">SORTIFY</h1>
                    </Link>
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
                        <button className='sorter__content-button icon-button sort-button' onClick={handleUpperCase}><LuCaseUpper /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleLowerCase}><LuCaseLower /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleSortAToZ}><FaSortAlphaDown /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleSortZToA}><FaSortAlphaUpAlt /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleSortRandom}><FaRandom /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleOrderedList}><LuListOrdered /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleLongest}><FaSortAmountUp /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleShortest}><FaSortAmountDownAlt /></button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleClearList}>Listeyi Temizle</button>
                        <button className='sorter__content-button icon-button sort-button' onClick={handleDeleteSame}>Aynı olanları sil</button>
                        {/* Diğer butonlar buraya eklenmeli */}
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
                    </div>

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
