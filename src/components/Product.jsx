import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

export class Product extends Component {
    render() {
        const { id, img, title, price, inCart } = this.props.product;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <div
                        className='img-container p-5'
                        onClick={() => console.log("clicked on img container")}>
                        <Link to="/details">
                            <img src={img} alt="Product" className='card-img-top' />
                        </Link>
                        <button
                            className='cart-btn'
                            disabled={inCart ? true : false}
                            onClick={() => { console.log("added to the cart") }}
                        >
                            {inCart ? (<p
                                className='text-capitalize mb-0'
                                disabled>{""}in cart</p>) : (<i className='fas fa-cart-plus'></i>)}
                        </button>

                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className='align-self-center mb-0'>{title}</p>
                        <h5 className='text-blue font-italic mb-0'>
                            <span className='mr-1'>${price}</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all .3s linear;
  }
  
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .3s linear;
  }
  
  &:hover {
    .card {
      border: .04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
        background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  
  .card-img-top {
    transition: all .3s linear;
  }
  
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .2rem .4rem;
    background-color: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: .5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .3s linear;
  }
  
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
`

export default Product