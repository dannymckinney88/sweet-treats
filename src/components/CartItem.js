import React from "react";

const CartItem = (props) => {
  const { item } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img
            className="cart-item-img"
            src={item.media.source}
            alt={item.name}
          />
          <h4 className="cart-item__details-name">{item.name}</h4>
          <p> {item.price.formatted_with_symbol} </p>
        </div>
        <div className="col cart-btn-container">
          <div className="button-wrapper">
            <button
              type="button"
              onClick={() =>
                props.handleUpdateCartQty(item.id, item.quantity - 1)
              }
              className="cart-btn minus"
            >
              {" "}
              <i class="cart-btn far fa-minus-square fa-2x"></i>{" "}
            </button>
            <p className="quantity">{item.quantity}</p>
          </div>
          <button
            type="button"
            onClick={() =>
              props.handleUpdateCartQty(item.id, item.quantity + 1)
            }
            className="cart-btn"
          >
            {" "}
            <i class="fas fa-plus fa-2x"></i>{" "}
          </button>
          <div className="trash-wrapper">
            <button
              type="button"
              className="cart-btn trash-btn"
              onClick={() => props.handleRemoveFromCart(item.id)}
            >
              {" "}
              <i class="far fa-trash-alt fa-2x"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
