import React from "react"
import BuyIcon from "../images/buy-icon.png"
import CartIcon from "../images/cart-icon.png"

export default function Info() {
    return (
        <div className="info">


            <h2>Agatsuma Zenitsu<small>Demon Slayer</small></h2>
            <a className="website" href="#">Agatsuma-Zenitsu.website</a>
            <div className="btn-wrap">
                <button className="btn btn-cart">
                    <img
                        src={CartIcon}
                        alt="Add to Cart" />
                    Add to Cart
                </button>
                <button className="btn btn-buy">
                    <img
                        src={BuyIcon}
                        alt="Buy Now" />
                    Buy Now
                </button>

            </div>
        </div>
    )
}

