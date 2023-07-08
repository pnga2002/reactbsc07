import {configureStore} from '@reduxjs/toolkit'
import gioHangReducer from './gioHangReducer'
import BaiTapDatVeReducer from './BaiTapDatVeReducer'

export const store = configureStore ({
    reducer:{
        //các state ứng dụng đặt tại đây
        stateGioHang:gioHangReducer,
        BaiTapDatVeReducer:BaiTapDatVeReducer
       
    }
})