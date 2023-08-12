import { createContext, useContext, useEffect, useReducer } from "react";
import { inventoryData } from "../data";

export const manageItem = createContext();

export function ItemContext({ children }) {
  const [itemState, itemDispatch] = useReducer(itemReducer, {
    itemData: inventoryData,
    displayItem: {},
    itemSetted: false,
    deptFilter: "",
    typeFilter: "",
  });

  function itemReducer(state, action) {
    switch (action.type) {
      case "SET_ITEM":
        return {
          ...state,
          itemData: [
            ...inventoryData,
            ...(JSON.parse(localStorage.getItem("moreItems")) ?? []),
          ],
        };

      case "SET_DISPLAY_ITEM":
        return {
          ...state,
          displayItem: state?.itemData?.find(
            (item) => item.id === +action.payload
          ),
        };

      case "SET_NEW_ITEM":
        localStorage.setItem(
          "moreItems",
          JSON.stringify([
            ...(JSON.parse(localStorage.getItem("moreItems")) ?? []),
            action.payload,
          ])
        );
        return { ...state, itemSetted: !state?.itemSetted };

      case "DEPT_FILTER":
        return { ...state, deptFilter: action.payload };

      case "TYPE_FILTER":
        return { ...state, typeFilter: action.payload };

      default:
        return { ...state };
    }
  }

  useEffect(() => {
    itemDispatch({ type: "SET_ITEM" });
  }, [itemState?.itemSetted]);

  return (
    <manageItem.Provider value={{ itemState, itemDispatch }}>
      {children}
    </manageItem.Provider>
  );
}

export const useItems = () => useContext(manageItem);
