import { LuListOrdered, LuCaseUpper, LuCaseLower } from "react-icons/lu";
import { FaRandom, FaSortAlphaDown, FaSortAlphaUpAlt, FaSortAmountUp, FaSortAmountDownAlt, FaBroom } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const buttons = [
  { action: 'sortToUpperCase', label: LuCaseUpper },
  { action: 'sortToLowerCase', label: LuCaseLower },
  { action: 'sortToSortAToZ', label: FaSortAlphaDown },
  { action: 'sortToSortZToA', label: FaSortAlphaUpAlt },
  { action: 'sortToSortRandom', label: FaRandom },
  { action: 'sortToOrderedList', label: LuListOrdered },
  { action: 'sortToLongest', label: FaSortAmountDownAlt },
  { action: 'sortToShortest', label: FaSortAmountUp },
  { action: 'sortToDeleteSame', label: FaBroom },
];

