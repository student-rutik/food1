import React, { useState, useEffect, useRef } from 'react';
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Cart(props) {
  let dispatch = useDispatchCart();
  let data = useCart();

  let priceRef = useRef();

  let options = props.options;
  let priceOption = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOption[0]); // Default value

  let finalprice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handleACart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    if (food.length !== 0) {  // Changed from `food !== []` to `food.length !== 0`
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalprice, qty: qty });
        return;
      }
      else if(food.size !== size ){
        await dispatch({
          type: "ADD", 
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalprice,
          qty: qty,
          size: size
        });
        return;
    }
      return;
  }
    
    await dispatch({
      type: "ADD", 
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalprice,
      qty: qty,
      size: size
    });
  };

 

  return (
    <div>
      <div className="card mt-5" style={{ width: "18rem", maxHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "140px", objectFit: "fill" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card.
          </p>
          <div className="container w-100 mb-2">
            <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOption.map((data, index) => {
                return (
                  <option key={index} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">${finalprice}/-</div>
          </div>
          <hr className="mt-auto" />
          <button className="btn btn-success ms-2 mt-auto" style={{ width: "150px" }} onClick={handleACart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
