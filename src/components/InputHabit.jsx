import "./InputHabit.css"
import { useItems } from "../context/ItemContext";

export default function InputHabit() {
    const { showForm, setShowForm, setForm, submitHandler } = useItems()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="input-habit-form" style={{display: showForm ? "block" : "none"}}> 
        <h2>Add Habit Form</h2>
      <input type="text" name="name" placeholder="Name..." onChange={handleChange} className="form-name" />
      <label htmlFor="repeat">
        Repeat
        <select id="repeat" name="repeat">
            <option selected>none</option>
          <option>Daily</option>
          <option>Once a week</option>
          <option>Twice a week</option>
          <option>Thrice a week</option>
        </select>
      </label>
      <label htmlFor="startDate">
        Start Date
        <select id="startDate" name="startDate" onChange={handleChange}>
            <option selected>none</option>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>Day after tommorow</option>
          <option>Next week</option>
        </select>
      </label>
      <label htmlFor="timeOfDay">
        Time of Day
        <select id="timeOfDay" name="timeOfDay" onChange={handleChange}>
            <option selected>none</option>
          <option>Anytime</option>
          <option>Morning</option>
          <option>Evening</option>
          <option>Afternoon</option>
          <option>Night</option>
        </select>
      </label>
      <label htmlFor="goal">
        Goal
        <select id="goal" name="goal" onChange={handleChange}>
            <option selected>none</option>
          <option>Once a day</option>
          <option>Twice a day</option>
          <option>Thrice a day</option>
        </select>
      </label>
      <div className="form-btn">
      <button onClick={()=>{
        setShowForm(false)
        submitHandler();}}>Add habit</button>
      <button onClick={()=>setShowForm(false)}>Cancel</button></div>
    </div>
  );
}
