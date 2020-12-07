
import {ADD_COUNTER,ADD_TO_CART} from './mutaions-type'

export default{
    //相同的商品数量加一
    [ADD_COUNTER](state,payload){
        payload.count++
    },
    //添加新商品进购物车
    [ADD_TO_CART](state,payload){
        payload.isCheck = true
        state.carList.push(payload)
    }
}