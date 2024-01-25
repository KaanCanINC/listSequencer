import { useState } from "react";
import { LuListOrdered, LuCaseUpper, LuCaseLower, LuIterationCcw } from "react-icons/lu";
import { FaRandom, FaSortAlphaDown, FaSortAlphaUpAlt, FaSortAmountUp, FaSortAmountDownAlt } from "react-icons/fa";

const Button = () => {
  const buttons = [
    { label: 'Aynıları sil', action: deleteSameButton },
    { label: 'Satır başındaki harfleri büyük yap', action: lowerCase },
    { label: 'Cümle başındaki harfleri büyük yap', action: lowerCase },
    { label: '"-" ile ayır', action: lowerCase },
    { label: 'Satır arası boşluk', action: addSpaceButton },
    { label: 'Satır arası boşluk sil', action: deleteSpaceButton },
    { label: 'Virgül ile ayır', action: lowerCase },
  ];

  function isPositive(value) {
    return value.length > 0;
  }

  if (deleteSpace) {
    sortedList = sortedList.map(item => item.trim()).filter(item => item !== ''); // Boş satırları kaldır
  }

  function upperCase() {
    const inputText = document.getElementById('inputText').value.trim().split("\n");
    const upperCasedText = inputText.filter(isPositive).join("\n").toUpperCase()
    document.getElementById('outputText').value = upperCasedText;
  }

  function lowerCase() {
    function isPositive(value) {
      return value.length > 0;
    }
    const inputText = document.getElementById('inputText').value.trim().split("\n");
    const lowerCasedText = inputText.filter(isPositive).join("\n").toLowerCase()
    document.getElementById('outputText').value = lowerCasedText;
  }
  function sortAToZ() {
    const inputText = document.getElementById('inputText').value.trim().split("\n");
    const sortedList = inputText.sort()
    document.getElementById('outputText').value = sortedList.join("\n").trim();
  }

  function sortZAButton() {
    const inputText = document.getElementById('inputText').value.trim().split("\n").sort();
    const sortedList = inputText.filter(isPositive).reverse()
    document.getElementById('outputText').value = sortedList.join("\n").trim();

  };

  function shuffleButton() {
    const inputText = document.getElementById('inputText').value.trim().split("\n");
    const sortedList = inputText.sort(() => Math.random() - 0.5)
    document.getElementById('outputText').value = sortedList.join("\n").trim();
  };

  function deleteSameButton() {
    const listData = listTextarea.value.trim();
    const listArray = listData.split("\n");
    const uniqueItems = {};
    listArray.forEach((item) => {
      const lowercaseItem = item.toLowerCase();
      uniqueItems[lowercaseItem] = item.charAt(0).toUpperCase() + item.slice(1);
    });
    disabledListTextarea.value = Object. values(uniqueItems).join("\n");
  };

  function addSpaceButton() {
    const listData = listTextarea.value.trim();
    const listArray = listData.split("\n");
    const spacedListArray = listArray.map((item) => item + "\n");
    disabledListTextarea.value = spacedListArray.join("\n");
  };

  function deleteSpaceButton() {
    const listData = listTextarea.value.trim();
    const listArray = listData.split("\n");
    const deleteSpaceArr = listArray.map((item) => item.replace(/\s+$/, ""));
    disabledListTextarea.value = deleteSpaceArr.join("\n");
  };



  function clearButton() {
    listTextarea.value = "";
    disabledListTextarea.value = "";
  };


  return (
    buttons.map((button, index) => (
      <button className='sorter__content-button icon-button sort-button' key={index} onClick={button.action}>
        {button.label}
      </button>
    ))

  )

}

export default Button;

