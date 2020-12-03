<template>
  <div class="detail">
      <detail-nav-bar></detail-nav-bar>
      <h2>我是详情页{{iid}}</h2>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
    name: 'detail',
    components:{
        DetailNavBar
    },
    data(){
        return{
            iid: null
        }
    },
    created(){
        this.iid = this.$route.query.iid
        
        // console.log(this.iid);
    }
}
</script>

<style scoped>

</style>