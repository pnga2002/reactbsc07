import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    return (
      <div>
        <div class="table-responsive">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th> 
                <th scope="col">Product type</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
        
      </div>
    )
  }
}
