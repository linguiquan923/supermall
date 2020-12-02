<template>
  <div class="goods">
      <h2>{{goods}}</h2>
      <!-- <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item> -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
    name: "GoodsList",
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

</style>