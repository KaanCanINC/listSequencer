export function sortToUpperCase(inputText) {
    let newText = inputText.trim().split("\n");
    if (deleteSpace) {
        newText = newText.filter(item => item !== '');
    }
    return newText.join("\n").toUpperCase();
}

export function sortToLowerCase(inputText) {
    let newText = inputText.trim().split("\n");
    if (deleteSpace) {
        newText = newText.filter(item => item !== '');
    }
    return newText.join("\n").toLowerCase();
};

export function sortToSortAToZ(inputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort();
    return sortedList.join('\n');
};
export function sortToSortZToA(inputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort().reverse();
    return sortedList.join('\n');
};

export function sortToSortRandom(inputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort(() => Math.random() - 0.5);
    return sortedList.join('\n');
}
export function sortToOrderedList(inputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    const orderedList = sortedList.sort().map((item, index) => {
        return `${index + 1}. ${item}`
    })
    return (orderedList.join('\n'));
}

export function sortToLongest(inputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }

    sortedList.sort((a, b) => a.length - b.length).reverse();
    return sortedList.join('\n');
}

export function sortToShortest(inputText) {
    let sortedList = inputText.trim().split('\n');
    if (deleteSpace) {
        sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    }
    sortedList.sort((a, b) => a.length - b.length);
    return sortedList.join('\n');
}

export function sortToDeleteSame(inputText) {
    let sortedList = inputText.trim().split('\n');
    sortedList = sortedList.map(item => item.trim()).filter(item => item !== '');
    sortedList = sortedList.filter((value, index) => sortedList.indexOf(value) === index)
    return sortedList.join("\n");
}

