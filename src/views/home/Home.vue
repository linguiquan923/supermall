<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li><li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
//公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

//子组件
import RecommendView from "./childComps/RecommendView";
import HomeSwiper from "./childComps/HomeSwiper";
import FeatureView from "./childComps/FeatureView";

//方法
import {getHomeMultidata,getHomeGoods} from "network/home";

export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,

      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {

        // results: null
        banners: [],
        recommends: [],
        goods:{
          'pop':{page: 0 , list:[]},
          'news':{page: 0 , list:[]},
          'sell':{page: 0 , list:[]},
        }

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
      getHomeGoods('pop',1).then((res)=>{
        console.log(res);
      })
    },
      //2、获取商品的所有信息
  }
</script>

<style scoped>
  #home {
    padding-top: 22px;
    /*height: 100px;*/
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }

</style>
