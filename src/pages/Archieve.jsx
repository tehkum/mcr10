import { useItems } from "../context/ItemContext"

export default function Archieve(){
    const { archieveData, archieveDeleteHandler } = useItems();

    return <>
    <div className="dis-all-habit">
        {archieveData?.map((habit, index) => (
          <div className="habit-box">
            <div className="logos">
              <h3>{habit.name}</h3>
              <span>
                  <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/90/trash--v1.png" alt="trash--v1" onClick={()=>archieveDeleteHandler(habit.name)}/>
              </span>
            </div>
            <p><b>Repeat: </b>{habit.repeat}</p>
            <p><b>Goal: </b>{habit.goal}</p>
            <p><b>Time of Day: </b>{habit.timeOfDay}</p>
            <p><b>Start Date: </b>{habit.startDate}</p>
          </div>
        ))}
      </div>
  </>
}