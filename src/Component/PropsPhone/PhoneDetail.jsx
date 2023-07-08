import React, { Component } from 'react'

export default class PhoneDetail extends Component {
  render() {
        let {item} = this.props
    return (
      <div>
        <img src={item.hinhAnh} alt="" />
        <p>{item.tenSP}</p>
        <p>{item.manHinh}</p>
        <p>{item.heDieuHanh}</p>
        <p>{item.cameraSau}</p>
        <p>{item.cameraTruoc}</p>
        <p>{item.tenSP}</p>
        <p>{item.giaBan}</p>
        <p>{item.tenSP}</p>
      </div>
    )
  }
}
