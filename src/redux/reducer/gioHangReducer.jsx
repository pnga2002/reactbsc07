///setup state gio hang tren store

const stateGioHang = {
    gioHang:[]
}
const gioHangReducer = (state = stateGioHang,action)=>{
    switch (action.type) {
        case 'THEM_GIO_HANG':{
            let index = state.gioHang.findIndex(sq =>sq.maSP==action.payload.maSP);
            const newCart = [...state.gioHang]
            if(index==-1){
                newCart.push({...action.payload,soLuong:1})
               
            } else{
                const itemSP = {
                    ...newCart[index],
                    soLuong:newCart[index].soLuong+1}
                newCart[index]={...itemSP}
            }
            //setState
            return {...state, gioHang:newCart}
        }
    }
    return state
}
export default gioHangReducer