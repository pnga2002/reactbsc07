import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LayoutReact from './Layout/LayoutReact'
import PhoneLayout from './Component/PropsPhone/PhoneLayout'
import Caurosel from './Layout/Caurosel'
import LayoutForm from './Component/FormReact/LayoutForm'
import BTGioHangRedux from './Component/BaiTapGioHangRedux/BTGioHangRedux'
import DatVe from './Component/DatVeRedux/DatVe'
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<LayoutReact/>}>
                <Route index element={<Caurosel />}/>
                <Route path='phone' element={<PhoneLayout />}/>
                <Route path='form' element={<LayoutForm />}/>
                <Route path='giohang' element={<BTGioHangRedux/>}/>
                <Route path='datve' element={<DatVe/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
