function sortToUpperCase(inputText, setOutputText) {
    let newText = inputText.trim().split("\n");
    if (deleteSpace) {
        newText = newText.filter(item => item !== '');
    }
    setOutputText(newText.join("\n").toUpperCase())
}

function sortToLowerCase(inputText, setOutputText) {
    let newText = inputText.trim().split("\n");
    if (deleteSpace) {
        newText = newText.filter(item => item !== '');
    }
    setOutputText(newText.join("\n").toLowerCase())
};

function sortToSortAToZ(inputText, setOutputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort();
    setOutputText(sortedList.join('\n'))
};
function sortToSortZToA(inputText, setOutputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort().reverse();
    setOutputText(sortedList.join('\n'))
};

function sortToSortRandom(inputText, setOutputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort(() => Math.random() - 0.5);
    setOutputText(sortedList.join('\n'))
}
function sortToOrderedList(inputText, setOutputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    const orderedList = sortedList.sort().map((item, index) => {
        return `${index + 1}. ${item}`

    })
    setOutputText((orderedList.join('\n')))
}

function sortToLongest(inputText, setOutputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort((a, b) => a.length - b.length).reverse();
    setOutputText(sortedList.join('\n'))
}

function sortToShortest(inputText, setOutputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }
    sortedList.sort((a, b) => a.length - b.length);
    setOutputText(sortedList.join('\n'))
}

function sortToDeleteSame(inputText, setOutputText) {
    let sortedList = inputText.trim().split('\n');
    sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    sortedList = sortedList.filter((value, index) => sortedList.indexOf(value) === index)
    setOutputText(sortedList.join("\n"))
}

export default {
    sortToUpperCase, sortToLowerCase, sortToSortAToZ, sortToSortZToA, sortToSortRandom, sortToOrderedList, sortToLongest, sortToShortest, sortToDeleteSame,
}

// // helper.js
// function sortAlphabetically(value, setResult) {
//     const sortedList = value.split(" ").sort();
//     setResult(sortedList);
// }
// function shuffle(setResult) {
//     setResult("Random sıralandı");
// }

// export default { sortAlphabetically, shuffle };