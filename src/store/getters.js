export default{
    carListLength(state){
        let total = 0
        let products = null
        products = state.carList
        if(products){
          for(let item of products){
            total += item.count
          }
        }
        console.log(total);
        return total
    }
}