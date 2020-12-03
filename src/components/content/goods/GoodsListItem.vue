<template>
  <div>我是goodsListItem
      <img src="" @click="itemClick"/>
  </div>
</template>

<script>
export default {
    name: 'GoodListItem',
    props:{
        goodsItem:{
            type: Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        itemClick(){
            console.log('---')
        }
    }
}
</script>

<style scoped>

</style>