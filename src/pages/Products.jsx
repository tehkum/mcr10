import { useNavigate, useParams } from "react-router";
import { useItems } from "../context/ItemContext";
import { useState } from "react";
import "./Home.css";

export default function Products() {
  const { itemState, itemDispatch } = useItems();
  const navigate = useNavigate();
  const [lowStock, setLowStock] = useState(false);
  const { cat } = useParams();

  const deptFilter =
    itemState?.deptFilter && itemState?.deptFilter !== "all"
      ? itemState?.itemData?.filter(
          (item) => item.department === itemState?.deptFilter
        )
      : itemState?.itemData;

  const typeFilter =
    itemState?.typeFilter &&
    itemState?.typeFilter !== "--" &&
    itemState?.typeFilter === "name"
      ? deptFilter.sort((a, b) => a.name.localeCompare(b.name))
      : itemState?.typeFilter !== " name"
      ? deptFilter.sort(
          (a, b) => +a[itemState?.typeFilter] - +b[itemState?.typeFilter]
        )
      : deptFilter;

  const lowStockHandler = (e) =>
    e.target.checked ? setLowStock(true) : setLowStock(false);

  const lowStockFilter = lowStock
    ? typeFilter.filter((item) => +item.stock <= 10)
    : typeFilter;

  return (
    <section className="products-sec">
      <div className="filter-section">
        <h1>Products</h1>
        <select
          defaultValue={cat}
          value={itemState?.deptFilter}
          onChange={(e) =>
            itemDispatch({ type: "DEPT_FILTER", payload: e.target.value })
          }
        >
          <option value="all">All Items</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <label htmlFor="stock">
          <input
            type="checkbox"
            id="stock"
            name="stock"
            onChange={lowStockHandler}
          />
          Low Stock Items
        </label>
        <select
          value={itemState?.typeFilter}
          onChange={(e) =>
            itemDispatch({ type: "TYPE_FILTER", payload: e.target.value })
          }
        >
          <option value="--">--</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <button onClick={() => navigate("/add-new")}>New</button>
      </div>
      <table>
        <tr className="head-table">
          <td>
            <b>Image</b>
          </td>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Description</b>
          </td>
          <td>
            <b>Price</b>
          </td>
          <td>
            <b>Stock</b>
          </td>
          <td>
            <b>Supplier</b>
          </td>
        </tr>
        {lowStockFilter?.map((items) => (
          <tr key={items?.id} onClick={() => navigate(`/product/${items?.id}`)}>
            <td>
              <img
                src={items?.imageUrl}
                alt={items?.name}
                width="100"
                height="100"
              />
            </td>
            <td>{items?.name}</td>
            <td>{items?.description}</td>
            <td>{items?.price}</td>
            <td>{items?.stock}</td>
            <td>{items?.supplier}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}
