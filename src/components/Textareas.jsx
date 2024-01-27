


const Textareas = (disabled) => {

    return (
        <>
            <textarea
                value={inputText}
                className='sorter__content-textarea'
                onChange={handleInputChange}
                placeholder="Metin girin..."
                cols='50'
                rows='40'
            ></textarea>
            <textarea
                value={outputText}
                readOnly
                className='sorter__content-textarea'
                placeholder="Listenizin son hali burada görüntülenecek."
                cols='50'
                rows='40'
            ></textarea>
        </>

    );
};

export default Sorter;
