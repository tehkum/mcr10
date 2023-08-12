import { useState } from "react";
import InputHabit from "../components/InputHabit";
import { useItems } from "../context/ItemContext";
import "./Home.css";
import EditInput from "../components/EditInput";

export default function HomePage() {
  const { data, clickHandler, deleteHandler, archieveHandler, setShowEdit } = useItems();
  const [dataToEdit, setDataToEdit] = useState({});

  return (
    <>
      <div className="dis-all-habit">
        {data?.map((habit, index) => (
          <div className="habit-box">
            <div className="logos">
              <h3>{habit.name}</h3>
              <span>
              <img width="20" height="20" src="https://img.icons8.com/material-rounded/96/edit--v1.png" alt="edit--v1" onClick={()=>{
                setDataToEdit(habit)
                setShowEdit(true)
            }
              }/>
              <img width="20" height="20" src="https://img.icons8.com/material-rounded/96/archive.png" alt="archive" onClick={()=>archieveHandler(habit.name)}/>
              <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/90/trash--v1.png" alt="trash--v1" onClick={()=>deleteHandler(habit.name)}/>
              </span>
            </div>
            <p><b>Repeat: </b>{habit.repeat}</p>
            <p><b>Goal: </b>{habit.goal}</p>
            <p><b>Time of Day: </b>{habit.timeOfDay}</p>
            <p><b>Start Date: </b>{habit.startDate}</p>
          </div>
        ))}
      </div>
      <InputHabit />
     
      <EditInput name={dataToEdit.name} repeat={dataToEdit.repeat} timeOfDay={dataToEdit.timeOfDay} goal={dataToEdit.goal} startDate={dataToEdit.startDate} />
      <button className="float-btn" onClick={clickHandler}>
        +
      </button>
    </>
  );
}
