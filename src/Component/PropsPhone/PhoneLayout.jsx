import React, { Component } from "react";
import PhoneItem from "./PhoneItem";
import PhoneDetail from "./PhoneDetail";
import { Navigate } from "react-router-dom";
const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default class PhoneLayout extends Component {
  state = {
    phoneCT: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  };
  renderPhone = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className="col-4">
          <PhoneItem item={item} changeDetail={this.changeDetail}/>
        </div>
      );
    });
  };
  changeDetail = (item) => {
    this.setState({
      phoneCT: item,
    });
  };
  render() {
    if(!localStorage.getItem('userLogin')) {
      return <Navigate to="/" replace={false} />
      }
    return (
      <div className="container">
        <h2>BAI TAP TRUYEN FUNCTION</h2>
        <div className="row">{this.renderPhone()}</div>
        <div className="detail mt-5">
          <PhoneDetail item={this.state.phoneCT}  />
        </div>
      </div>
    );
  }
}
