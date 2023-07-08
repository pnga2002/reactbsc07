import React, { Component, Fragment } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGhe from "./../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
import {connect} from 'react-redux'

class DatVe extends Component {
  state= {
    stateThongTin:{
      ten:'',
      soLuongGhe:''
    },
    ketqua:'anThongTin'
  }
  renderHangGhe = () => {
    return danhSachGhe.map((item, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={item} soHangGhe={index} />
        </div>
      );
    });
  };
  handlesubmit = (event) => {
    event.preventDefault();
    this.setState({
      ketqua:'anThongTin'
    })
    const action={
      type:'XAC_NHAN',
      payload:this.state.stateThongTin
    }
    this.props.dispatch(action)
  };
  handleChange = (event)=>{
    let {id,value} = event.target
    let newValue = {...this.state.stateThongTin}
    newValue[id]=value
    this.setState({
      stateThongTin:newValue
    })

  }
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container  py-5">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning display-4">Bai Tap Dat Ve </h1>
                <form onSubmit={this.handlesubmit}>
                  <div className="row">
                    <div className="col-5">
                      <div className="mb-3">
                        <input  onChange={this.handleChange}
                          type="text"
                          name
                          id="ten"
                          className="form-control"
                          placeholder="Name"
                          aria-describedby="helpId"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="mb-3">
                        <input onChange={this.handleChange}
                          type="number"
                          name
                          id="soLuongGhe"
                          className="form-control"
                          placeholder="Số ghế muốn đặt"
                          aria-describedby="helpId"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <button type="submit" className="btn btn-warning">
                        Chọn ghế
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-5 text-light " style={{ fontSize: "25px" }}>
                  Man Hinh
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
                <div className="text-end mt-5 ">
                  <button className="btn btn-warning" onClick={()=>{
                    this.setState({
                      ketqua:'hienThongTin'
                    })
                  }}>Tiếp tục</button>
                </div>
              </div>

              <div className={`${this.state.ketqua} col-4 `}>
                <h1 className="text-warning display-4 text-center">
                  Ghe ban chon{" "}
                </h1>
                <ThongTinGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    thongTinNguoiDat: state.BaiTapDatVeReducer.thongTinNguoiDat
  }
  
}

export default connect(mapStateToProps)(DatVe)