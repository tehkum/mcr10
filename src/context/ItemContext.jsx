import { createContext, useContext, useEffect, useState } from "react";
import { HabitData } from "../data";

export const manageItem = createContext();

export function ItemContext({children}){
    const [ data, setData ] = useState([]);
    const [ showForm, setShowForm ] = useState(false);
    const [ archieveData, setArchieveData ] = useState([])
    const [formData, setForm] = useState({
        id: Math.floor(Math.random() * 10000 + 10000).toString().substring(1),
        name: "",
        repeat: "",
        goal: "",
        timeOfDay: "",
        startDate: "",
      });
  const [showEdit, setShowEdit] = useState(false)

      const archieveDeleteHandler = (name) => {
        setArchieveData(archieveData.filter(item=> !(item.name === name)))
      }



      const archieveHandler = (name) => {
        const archieve = data.find(item=>item.name === name)
        setArchieveData([...archieveData, archieve]);
        setData(data.filter(item=> !(item.name === name) ))
      }
    
      const submitHandler = () => {
        setData([...data, formData])
      }
    
      const deleteHandler = (name) => {
        setData(data.filter(item=> !(item.name === name)))
      }

    const clickHandler = () => {
        setShowForm(true)
    }

    useEffect(()=>{
        setData(HabitData);
    },[])

    return <manageItem.Provider value={{data, showEdit, setShowEdit, setData, clickHandler, archieveDeleteHandler, archieveData, archieveHandler, setShowForm, formData, setForm, submitHandler, deleteHandler, showForm}}>{children}</manageItem.Provider>
}

export const useItems = () => useContext(manageItem);