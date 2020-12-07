import {ADD_COUNTER,ADD_TO_CART} from './mutaions-type'

export default{
    //判断是否是购物车有的商品，
    addCarList(context,payload){
        return new Promise((resolve,reject)=>{
            //1、查找之前的数组是否有该商品，用find方法从carList中循环出一个item，判断item.iid是否等于payload.iid如果相等返回为真，即oldProdect为true
            let oldProduct = context.state.carList.find(item => item.iid === payload.iid)

            // console.log(oldProduct);

            //2、判断oldProdect
            // if(oldProduct){
            //     //现存商品数量加一
            //     console.log('oldProduct');
            //     context.commit(ADD_COUNTER,oldProduct)
                
            // }else{
            //     //新商品
            //     console.log('newProduct');
            //     context.commit(ADD_TO_CART,payload)
            // }


            //为了测试购物车多条数据，改了这的添加
            context.commit(ADD_TO_CART,payload)
            resolve('添加商品成功')
        })
    }
}