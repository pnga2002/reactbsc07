import React, { Component } from "react";
import {connect} from 'react-redux'
//su dung connect
class ProductItemRedux extends Component {
  render() {
    let {item} = this.props
    return (
        <div classname="card text-start">
          <img style={{width: 350, height: 400}} classname="card-img-top" src={item.hinhAnh} alt="Title" />
          <div classname="card-body">
            <h4 classname="card-title">Title</h4>
            <p classname="card-text">Body</p>
            <button className="btn btn-success" onClick={() => {this.props.themGioHang(item)}}>Them san Pham</button>
          </div>
        </div>
    );
  }
}
//lay tu state ve
const mapStateToProps=(state) => { 
  
 }
 //day nguoc lại len redux
const mapDispatchToProps= (dispatch) => { 
  return{
    themGioHang:(sp) => { 
      //tao action
      const action = {
        type:'THEM_GIO_HANG',
        payload:sp
      }
      //dung dispatch tu redux => gui du lieu len reducer
      dispatch(action)
     }
  }
 }
export default connect(mapStateToProps,mapDispatchToProps)(ProductItemRedux)

