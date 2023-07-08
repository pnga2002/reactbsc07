import React, { Component } from 'react'
import ProductItemRedux from './ProductItemRedux';

export default class ProductListRedux extends Component {
    data = [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          giaBan: 5700000,
          hinhAnh: "./img/vsphone.jpg",
        },
        {
          maSP: 2,
          tenSP: "Meizu 16Xs",
          giaBan: 7600000,
          hinhAnh: "./img/meizuphone.jpg",
        },
        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          giaBan: 27000000,
          hinhAnh: "./img/applephone.jpg",
        },
      ];
  renderProductItem=() => {
    return ( this.data.map((item,index)=>{
        return(
          <div className="col-4" key={index}>
            <ProductItemRedux item={item}/>
          </div>
            )
    }) )
   }
  render() {
    return (
      <div className='row'>
        {this.renderProductItem()}
      </div>
    )
  }
}
