import { CHON_GHE } from "../types/BaiTapDatVeType"



export const datGheAction=(ghe) => { 
    return {
        type:CHON_GHE,
        ghe
    }
 }