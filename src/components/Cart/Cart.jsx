import React, { useReducer } from 'react';
import './Cart.css';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), name: action.name, qty: 1 }];
    case 'INCREMENT':
      return state.map(item =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );
    case 'DECREMENT':
      return state.map(item =>
        item.id === action.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

function Cart() {
  const [cart, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    const name = prompt('Enter item name:');
    if (name) dispatch({ type: 'ADD_ITEM', name });
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <button className="add-btn" onClick={handleAdd}>Add Item</button>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <div className="controls">
            <button onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}>+</button>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
