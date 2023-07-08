const stateDafault = {
  danhSachGheDangDat: [
    {soGhe:'A1'}
  ],
  thongTinNguoiDat:{
    ten:'',
    soLuongGhe:''
  }
};
const BaiTapDatVeReducer = (state = stateDafault, action) => {
  switch (action.type) {
    case "CHON_GHE": {
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // console.log(action.ghe)
        danhSachGheDangDatUpdate.push({...action.ghe});
      }
    //   state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state ,danhSachGheDangDat:danhSachGheDangDatUpdate};
    }
    case 'XAC_NHAN':{
      let thongTinUpdate= {...state.thongTinNguoiDat}
      thongTinUpdate.ten=action.payload.ten
      thongTinUpdate.soLuongGhe=action.payload.soLuongGhe
      alert('đã xác nhận! mời bạn chọn ghế')
      return{...state,thongTinNguoiDat:thongTinUpdate}
    }
  }
  return state;
};
export default BaiTapDatVeReducer;
