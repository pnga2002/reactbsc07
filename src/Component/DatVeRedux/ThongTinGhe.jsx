import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light fs-5">Ghe da dat</span>
        </div>
        <div className="mt-5">
          <button className="gheDangChon"></button>
          <span className="text-light fs-5">Ghe Ban Chon</span>
        </div>
        <div className="mt-5">
          <button className="ghe ms-0"></button>
          <span className="text-light fs-5">Ghe Trong</span>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-4">
              <p className="text-light">Name: </p>
            </div>
            <div className="col-8">
              <p className="text-light">{this.props.thongTinNguoiDat.ten}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p className="text-light">Số lượng: </p>
            </div>
            <div className="col-8">
              <p className="text-light">
                {this.props.thongTinNguoiDat.soLuongGhe}
              </p>
            </div>
          </div>
          <table class="table table-primary" border={2}>
            <thead>
              <tr>
                <th scope="col">So ghe</th>
                <th scope="col">gia</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {()=>{
                    let newchuoi = this.props.danhSachGheDangDat.map((item, index) => {
                      let chuoi = "";
                        chuoi = item.soGhe + "-";
                      return chuoi;
                    }).slice(0,-1)
                    return newchuoi
                  }}
                  {/* {this.props.danhSachGheDangDat.map((item, index) => {
                    let chuoi = "";
                      chuoi = item.soGhe + "-";
                    let newchuoi = chuoi.slice(0, -1);
                    return chuoi;
                  })} */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
    thongTinNguoiDat: state.BaiTapDatVeReducer.thongTinNguoiDat,
  };
};
export default connect(mapStateToProps)(ThongTinGhe);
