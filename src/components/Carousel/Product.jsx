import React from "react";
import "./Carousel.module.scss"
export default function Product(props) {
    return (
        <div className="card">
            <img className="product--image" src={props.url} alt="product image" />
            
            <p className="price">{props.price}</p>
            <p>{props.description}</p>
            <p>
                <button>Add to Cart</button>
            </p>
        </div>
    );
}
