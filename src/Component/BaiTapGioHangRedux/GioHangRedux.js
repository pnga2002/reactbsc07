import React, { Component } from "react";
import {connect} from 'react-redux'
//su dung thu vien connect de lay du lieu tu store ve
/**
 * import connect
 * xoa export default owr dau trang
 */
 class GioHangRedux extends Component {
  render() {
    
    console.log(this.props.gioHang)
    return (
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog   "
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div class="table-responsive">
                <table class="table table-striped
                table-hover	
                table-borderless
                table-primary
                align-middle">
                  <thead class="table-light">
                    <tr>
                      <th>maSP</th>
                      <th>tenSP</th>
                      <th>hinhAnh</th>
                      <th>soLuong</th>
                      <th>gia</th>
                      <th>thanh tien</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      {this.props.gioHang.map((item,index)=>{
                        return <tr key={index} class="table-info" >
                        <td scope="row">{item.maSP}</td>
                        <td>{item.tenSP}</td>
                        <td><img src={item.hinhAnh} alt="" /></td>
                        <td>{item.soLuong}</td>
                        <td>{item.giaBan}</td>
                        <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                      </tr>

                      })}
                      
                    </tbody>
                    <tfoot>
                      
                    </tfoot>
                </table>
              </div>
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Ham lay state redux bien doi thanh props cua component
const mapStateToProps = (state) => {
    return{
      gioHang: state.stateGioHang.gioHang
    }
 }
export default connect(mapStateToProps)(GioHangRedux)
