<template>
  <div>我是goodsListItem</div>
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
    }
}
</script>

<style>

</style>