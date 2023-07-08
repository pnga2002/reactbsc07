import React, { Component } from "react";

export default class PhoneItem extends Component {
  render() {
    let {item,changeDetail} = this.props
    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src={item.hinhAnh} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{item.tenSP}</h4>
          <button className="btn btn-success" onClick={()=>{changeDetail(item)}}>Xem chi tiết</button>
        </div>
      </div>
    );
  }
}
