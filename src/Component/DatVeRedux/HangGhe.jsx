import React, { Component } from "react";
import {connect} from 'react-redux'
import { datGheAction } from "../../redux/action/BaiTapDatVeAction";
class HangGhe extends Component {
  handleChonGhe=(ghe) => { 
    let index = this.props.danhSachGheDangDat.findIndex(gheDaChon=>gheDaChon.soGhe==ghe.soGhe)
    if(this.props.thongTinNguoiDat.soLuongGhe < this.props.danhSachGheDangDat.length + 1 && index == -1){
      alert("Bạn đã chọn đủ, vui lòng ấn tiếp tục")
    } else{
      this.props.datGhe(ghe)
    }
   }
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((item, index) => {
      let cssGheDaDat = "";
      let cssGheDangDat = "";
      let disable=false;
      if (item.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable=true
      }
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===item.soGhe)
      if(indexGheDangDat!==-1){
        cssGheDangDat='gheDangChon'
      }
      return (
        <button disabled={disable}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
          onClick={() => { this.handleChonGhe(item) }}
        >
          {item.soGhe}
        </button>
      );
    });
  };
  renderSohang = () => {
    return this.props.hangGhe.danhSachGhe.map((item, index) => {
      return (
        <button className="rowNumber" key={index} S>
          {item.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderSohang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-start mt-3 ms-5" style={{fontSize:30}}>
        {this.renderHangGhe()}
      </div>
    );
  }
}
const mapStateToProps =state=>{
  return{
    danhSachGheDangDat:state.BaiTapDatVeReducer.danhSachGheDangDat,
    thongTinNguoiDat: state.BaiTapDatVeReducer.thongTinNguoiDat
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    datGhe:(ghe)=>{
      dispatch(datGheAction(ghe))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)