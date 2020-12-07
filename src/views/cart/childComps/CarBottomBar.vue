<template>
  <div class="cart-bottom-bar" >
      <div class="check-button" @click="checkClick">
        <check-button class="check-button1" :class="{checkbutton11: selectAll}" ></check-button>
        <span>全选</span>
      </div>
      <div class="totalPrice">
          总价:{{totalPrice}}
      </div>
      <div class="total" @click="totalClick">
          去计算({{(total)}})
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    name:'cartbottombar',
    components:{
        CheckButton
    },
    methods:{
        //全选按钮
        checkClick(){
            // console.log('checkItemClick');
            //如果已被选中，那么就所有的取消，否则反之
            //取消商品所有按钮
            if(this.selectAll){
                // for(let i = 0 ; i < this.$store.state.carList.length ; i++){
                //     // console.log(this.$store.state.carList[i]);
                //     this.$store.state.carList[i].isCheck = false
                // }
                // for(let item of this.$store.state.carList){
                //     item.isCheck = false
                // }
                this.$store.state.carList.forEach(element => {
                    element.isCheck = false
                });
            }else{
                // for(let i = 0 ; i < this.$store.state.carList.length ; i++){
                //     // console.log(this.$store.state.carList[i]);
                //     this.$store.state.carList[i].isCheck = true
                // }
                // for(let item of this.$store.state.carList){
                //     item.isCheck = true
                // }
                this.$store.state.carList.forEach(element => {
                    element.isCheck = true
                });
            }
        },
        //去计算按钮
        totalClick(){
            if(!this.selectAll){
                this.$toast.show('商品为空',2000)
            }
        }
    },
    computed:{
        //计算总价格
        totalPrice(){
            return "￥" + this.$store.state.carList.filter(item => {
                return item.isCheck
            }).reduce((preValue,item) =>{
                return preValue + item.count * item.price
            },0).toFixed(2)
        },
        total(){
            return this.$store.state.carList.filter(item => {
                return item.isCheck
            }).reduce((preValue,item)=>{
                return preValue + item.count
            },0)
        },
        //确定全选按钮是否为为空
        selectAll(){
            //判断是否有没有被选中，如果存在没有选中的，那么就返回false
            //长度为0代表全选，返回真
            // return this.$store.state.carList.filter((item)=>{
            //     //如果存在没有被选中的，就返回
            //     return !item.isCheck
            // }).length == 0
            // console.log(this.$store.state.carList);
            return (this.$store.state.carList.length != 0 && !this.$store.state.carList.find(item => !item.isCheck))
        }
    }
}   
</script>

<style scoped>
.cart-bottom-bar{
    position: relative;
    height: 40px;
    background-color:#eee;
    display: flex;
    /* line-height: 40px; */
    align-items: center;
    font-size: 15px;
}
.check-button{
    position: relative;
    height: 40px;
    width: 60px;
    line-height: 40px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    /* background-color: bisque; */
}
.check-button1{
    position: relative;
    width: 20px;
    height: 20px;
    /* background-color: yellow; */
    border-radius: 100%;
    background-color: grey;
}
.checkbutton11{
    background-color: red;
}
.check-button span{
    position: relative;
    margin-left: 5px;
    /* background-color: red; */
    flex: 1;
    width: 40px;
}
.totalPrice{
    position: relative;
    margin-left: 10px;
    flex: 1;
}
.total{
    background-color: red;
    height: 40px;
    width: 80px;
    line-height: 40px;
    color: white;
    position: relative;
    text-align: center;
    
}

</style>