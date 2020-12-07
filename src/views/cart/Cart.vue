<template>
<div class="cart">
  <!-- 顶部导航栏 -->
  <nav-bar class="cart-nav-bar">
    <div slot="center">购物车({{length}})</div>
  </nav-bar>

  <!-- 商品展示 -->
  <cart-list :products="$store.state.carList"></cart-list>
  

  <!-- 底部的汇总 -->
  <car-bottom-bar/>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'


import CartList from './childComps/CartList'
import CarBottomBar from './childComps/CarBottomBar'


  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CarBottomBar
    },
    data(){
      return{
 
      }
    },
    computed:{
      //把getters中映射到局部计算属性有两种方法。1、数组语法，2、对象语法
      // ...mapGetters(['carListLength'])
      ...mapGetters({
        length: 'carListLength'
      })
    },
    
  }
</script>

<style scoped>
  .cart{
    position: relative;
    
    right:0px;
    left: 0px;
  }
  .cart-nav-bar{
    color: white;
    background-color: var(--color-tint);
  }
</style>
