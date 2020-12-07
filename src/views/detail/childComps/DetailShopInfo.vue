<template>
  <div class="detailshopinfo">
      {{shop}}
  </div>
</template>

<script>
export default {
    name: 'detailshopinfo',
    props:{
        shop:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>