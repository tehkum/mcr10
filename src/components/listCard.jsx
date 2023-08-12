import "./Listcard.css";

export default function ListCard({name, qty, color}) {
  return (
    <div className="list-card">
      <h2 style={{color: color}}>{qty}</h2>
      <p>{name}</p>
    </div>
  );
}
