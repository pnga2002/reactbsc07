import React, { Component } from 'react'
import FormInput from './FormInput'
import TableProduct from './TableProduct'

export default class LayoutForm extends Component {
  render() {
    return (
      <>
        <FormInput/>
        <TableProduct/>
      </>
    )
  }
}
