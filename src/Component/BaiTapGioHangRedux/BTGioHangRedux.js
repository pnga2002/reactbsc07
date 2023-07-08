import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'

export default class BTGioHangRedux extends Component {
  render() {
    return (
      <div>
        <h3>Danh sách Sản Phẩm</h3>
        <div className="text-end">
          <span style={{width:17, cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#modalId"><i class="fa-solid fa-cart-arrow-down"></i>(0) Gio hang
          </span>
        </div>
        <ProductListRedux/>

        <GioHangRedux/>
      </div>
    )
  }
}
