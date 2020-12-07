<template>  
<div class="cart-list">
    <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in products" :key="index" :product = "item"/>
    </scroll>
</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'


export default {
    name:'cartlist',
    components:{
        Scroll,
        CartListItem
    },
    props:{
        'products':Array
    },
    data(){
        return{
           
        }
    },
    activated(){
        //由于刚加载进去cart页面scroll默认高度为0，所以我们每次进入的时候刷新一下scroll就可以获取到准确高度了
        this.$refs.scroll.refresh()
        console.log('this.$refs.scroll.refresh()');
    }
}
</script>

<style scoped>
    .cart-list{
        position: relative;
        /* display: inline-block; */
        height: calc(100vh - 44px - 49px - 40px);
        overflow: hidden;
    }
    .cart-list .content{
        position: relative; 
        height: 100%;
        overflow: hidden;
        /* overflow: hidden; */
    }
</style>