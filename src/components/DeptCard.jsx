import { useNavigate } from "react-router";
import "./Listcard.css";
import { useItems } from "../context/ItemContext";

export default function DeptCard({ name }) {
  const { itemDispatch } = useItems();
  const navigate = useNavigate();

  return (
    <div
      className="dept-card"
      onClick={() => {
        itemDispatch({ type: "DEPT_FILTER", payload: name });
        navigate(`/products/${name}`);
      }}
    >
      <h2>{name}</h2>
    </div>
  );
}
