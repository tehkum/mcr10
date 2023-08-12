import { useParams } from "react-router";
import { useItems } from "../context/ItemContext";
import { useEffect } from "react";
import "./Home.css";

export default function Product() {
  const { itemState, itemDispatch } = useItems();
  const { productId } = useParams();

  useEffect(() => {
    itemDispatch({ type: "SET_DISPLAY_ITEM", payload: productId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <section className="product-page">
      <h1>{itemState?.displayItem?.name}</h1>
      <img
        src={itemState?.displayItem?.imageUrl}
        alt={itemState?.displayItem?.name}
        width="400"
        height="400"
      />
      <p>
        <b>Price: </b> {itemState?.displayItem?.price}
      </p>
      <p>
        <b>Stock: </b> {itemState?.displayItem?.stock}
      </p>
      <p>
        <b>Supplier: </b> {itemState?.displayItem?.supplier}
      </p>
      <p>
        <b>Department: </b> {itemState?.displayItem?.department}
      </p>
      <p>
        <b>SKU: </b> {itemState?.displayItem?.sku}
      </p>
      <p>
        <b>Description: </b> {itemState?.displayItem?.description}
      </p>
    </section>
  );
}
