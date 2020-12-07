<template>
  <div class="cart-list-item">
      <check-button class="check-button" @click.native="cartListItemClick" :class="{ischeck:product.isCheck}"/>
      <img class="image" :src="product.image"/>
      <div class="left">
          <div>{{product.title}}</div>
          <div>{{product.desc}}</div>
          <div class="third">
              <span>￥{{product.price}}</span>
              <span>X{{product.count}}</span>
          </div>

      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    name: 'cartlistitem',
    components:{
        CheckButton
    },
    props:{
        product:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        cartListItemClick(){
            
            this.product.isCheck = !this.product.isCheck
            console.log('cartListItemClick');
        }
    }
}
</script>

<style scoped>
.cart-list-item{
    margin: 0 auto;
    width: 90%;
    position: relative;
    height: 100px;
    margin-top: 5px;
    background-color: aquamarine;
}
.cart-list-item .image{
    position: relative;
    width: 30%;
    border-radius: 4px;
    left: 25px;
}
.left{
    width: calc(70% - 20px);
    position: relative;
    left: 0px;
    float: right;
    text-align: center;
}
.third span:first-child{
    float: left;
}
.third span:last-child{
    float: right;
}
.check-button{
    /* background-color: red; */
    width: 20px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    background-color:gray;
    border-radius: 100%;
}
.ischeck{
    background-color: red;
}
</style>