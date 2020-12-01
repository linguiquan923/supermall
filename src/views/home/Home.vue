<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import {getHomeMultidata} from "network/home";

export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return {

        // results: null
        banners: [],
        recommends: []

      }
    },
    created() {
      //1、请求多个数据，加括号调用函数，
      getHomeMultidata().then((res)=>{
        // console.log(res);
        // this.results = res
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    box-shadow: 0 1px 1px 1px rgba(100,100,100,0.1);
    color: white;
  }
</style>
