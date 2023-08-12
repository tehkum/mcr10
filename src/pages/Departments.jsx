import DeptCard from "../components/DeptCard";
import { useItems } from "../context/ItemContext";
import "./Home.css";

export default function Departments() {
  const { itemState } = useItems();

  const deptData = itemState?.itemData?.reduce(
    (acc, curr) =>
      acc?.find((item) => item === curr.department)
        ? [...acc]
        : [...acc, curr.department],
    []
  );

  console.log(deptData);

  return (
    <section className="main-data">
      {deptData?.map((dep) => (
        <DeptCard name={dep} />
      ))}
    </section>
  );
}
