<template>
  <div id="home" class="wrapper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="swiperimageload"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type: Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        isLoad: false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swiperimageload(){
        if(!this.isLoad){
        this.$emit('swiperimageload')
        this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
