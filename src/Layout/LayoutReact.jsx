import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default class LayoutReact extends Component {
  render() {
    return (
      <div className=''>
        <Header/>
        <div className="">
          <Outlet/>
        </div>
        {/* <Footer/> */}
      </div>
    )
  }
}
