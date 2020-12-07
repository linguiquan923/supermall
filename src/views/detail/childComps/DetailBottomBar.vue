<template>
  <div class="bottom-bar">     
    <div class="bar-item bar-left">
        <span >客服</span>
        <span >店铺</span>
        <span >收藏</span>
    </div>
    <div class="bar-item bar-right">
        <span @click="carClick">加入购物车</span>
        <span >购买</span>

    </div>
  </div>
</template>

<script>
export default {
    name: 'bottombar',
    methods:{
        carClick(){
            this.$emit('addToCar')
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        position: fixed;
        right: 0px;
        left: 0px;
        bottom: 0px;
        height: 49px;
        background-color: gray;
        z-index: 9;
        color: aliceblue;
        display: flex;
    }
    .bar-item span{
        flex: 1;
        margin: 6px;
    }
</style>