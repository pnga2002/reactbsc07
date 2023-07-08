import React, { Component } from "react";

export default class FormInput extends Component {
  state = {
    values: {
      id: "",
      img: "",
      name: "",
      prodType: "",
      price: "",
      desc: "",
    },
    err: {
      id: "",
      img: "",
      name: "",
      prodType: "",
      price: "",
      desc: "",
    },
    check: false,
    arrProduct: [
      {
        id: "1",
        name: "iphone x",
        img: "https://i.pravatar.cc?u=1",
        price: 1000,
        prodType: "phone",
        desc: "product 1",
      },
    ],
  };
  handleCheck=() => { 
    let {values,err}=this.state;
        for(let key in err){
            if(err[key] !== '' || values[key] == ''){
              console.log('an')
                return true;

            }
        }
        console.log('hien')
        return false;
   }
  handleChange = (e) => {
    let { id, value } = e.target;
    
    let dataType = e.target.getAttribute('data-type');
    let message = "";
    let newValue = { ...this.state.values };
    newValue[id] = value;

    let newErr = { ...this.state.err };
    //check rong
    if (value.trim() == "") {
      message = id + " is empty";
    }else{
      //check so
      if(dataType=='number'){
          let regexNumber=/^\d+$/;
          if(!regexNumber.test(value)){
              message = id +' is invalid';
          }
      }
    }
    newErr[id] = message;
    
    this.setState({
      values: newValue,
      err: newErr
    },()=>{
      this.setState({
          check:this.handleCheck()
      })
  });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    // console.log(this.state.values)
    console.log(this.state.err);
    console.log(this.state.check);
    let { values, err } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="mt-3">
        <h2 className="text-center">Quan Ly Nguoi Dung</h2>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor className="form-label">
              ID
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="id"
              aria-describedby="helpId"
              placeholder="id"
            />
            <small id="id" className="form-text text-danger">
              {err.id}
            </small>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor className="form-label">
              Image
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="img"
              aria-describedby="helpId"
              placeholder="img"
            />
            <small id="img" className="form-text text-danger ">
              {err.img}
            </small>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor className="form-label">
              Name
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="helpId"
              placeholder="name"
            />
            <small id="name" className="form-text text-danger ">
              {err.name}
            </small>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor className="form-label">
              Product type
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="prodType"
              aria-describedby="helpId"
              placeholder="prodType"
            />
            <small id="prodType" className="form-text text-danger ">
              {err.prodType}
            </small>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor className="form-label">
              Price
            </label>
            <input
              onChange={this.handleChange}
              data-type="number"
              type="text"
              className="form-control"
              id="price"
              aria-describedby="helpId"
              placeholder="price"
            />
            <small id="price" className="form-text text-danger ">
              {err.price}
            </small>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor className="form-label">
              Decsription
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="desc"
              aria-describedby="helpId"
              placeholder="Decsription"
            />
            <small id="desc" className="form-text text-danger ">
              {err.desc}
            </small>
          </div>
        </div>
        <button disabled={this.state.check} className="btn btn-success">
          Add
        </button>
      </form>
    );
  }
}
