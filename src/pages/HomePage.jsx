import ListCard from "../components/listCard";
import { useItems } from "../context/ItemContext";
import "./Home.css";

export default function HomePage() {
  const { itemState } = useItems();

  const totalStock = itemState?.itemData?.reduce(
    (acc, curr) => +acc + +curr.stock,
    0
  );

  const totalDelivered = itemState?.itemData?.reduce(
    (acc, curr) => +acc + +curr.delivered,
    0
  );

  const lowItemStock = itemState?.itemData?.filter(
    (item) => +item.stock <= 10
  )?.length;

  return (
    <>
      <section className="main-data">
        <ListCard name="Total Stock" qty={totalStock} color="red" />
        <ListCard name="Total Delievered" qty={totalDelivered} color="green" />
        <ListCard name="Low Item Stock" qty={lowItemStock} color="orange" />
      </section>
    </>
  );
}
