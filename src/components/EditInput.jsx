import "./InputHabit.css";
import { useItems } from "../context/ItemContext";
import { useState } from "react";

export default function EditInput({
  name,
  startDate,
  repeat,
  timeOfDay,
  goal,
}) {
  const { setShowEdit, formData, data, setData, showEdit } = useItems();
  const [editDetails, setEditDetails] = useState({
    name: name,
    repeat: repeat,
    goal: goal,
    timeOfDay: timeOfDay,
    startDate: startDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleEdit = (name) => {
    const updatedHabit = {
      name: editDetails.name,
      repeat: editDetails.repeat,
      goal: editDetails.goal,
      timeOfDay: editDetails.timeOfDay,
      startDate: editDetails.startDate,
    };
    const updatedData = data.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          ...updatedHabit,
        };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div
      className="input-habit-form"
      style={{ display: showEdit ? "flex" : "none" }}
    >
      <h2>Edit Habit Form</h2>
      <input
        type="text"
        defaultValue={name}
        name="name"
        placeholder="Name..."
        value={editDetails.name} 
        onChange={handleChange}
        className="form-name"
      />
      <label htmlFor="repeat">
        Repeat
        <select
          id="repeat"
          name="repeat"
          defaultValue={repeat}
          value={editDetails.repeat}
        >
        <option >none</option>
          <option>Daily</option>
          <option>Once a week</option>
          <option>Twice a week</option>
          <option>Thrice a week</option>
        </select>
      </label>
      <label htmlFor="startDate">
        Start date
        <select
          defaultValue={startDate}
          id="startDate"
          name="startDate"
          onChange={handleChange}
          value={editDetails.startDate}
        >
            <option >none</option>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>Day after tomorrow</option>
          <option>Next week</option>
        </select>
      </label>
      <label htmlFor="timeOfDay">
        Time of Day
        <select
          defaultValue={timeOfDay}
          id="timeOfDay"
          name="timeOfDay"
          onChange={handleChange}
          value={editDetails.timeOfDay}
        >
            <option >none</option>
          <option>Anytime</option>
          <option>Morning</option>
          <option>Evening</option>
          <option>Afternoon</option>
          <option>Night</option>
        </select>
      </label>
      <label htmlFor="goal">
        Goal
        <select
          id="goal"
          name="goal"
          onChange={handleChange}
          value={editDetails.goal}
          defaultValue={goal}
        >
            <option>none</option>
          <option>Once a day</option>
          <option>Twice a day</option>
          <option>Thrice a day</option>
        </select>
      </label>
      <div className="form-btn">
        <button onClick={() => {
            setShowEdit(false)
            handleEdit(name)}}>Edit habit</button>
        <button onClick={() => setShowEdit(false)}>Cancel</button>
      </div>
    </div>
  );
}



