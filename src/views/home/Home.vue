<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" 
                  class="tab-control"
                  @tabClick="tabClick"
                  />
    <goods-list :goods="showGoods"/>
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
import GoodsList from 'components/content/goods/GoodsList.vue'


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
      GoodsList,

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
        },
        currentType: 'pop'

      }
    },
    created() {
      //1、请求多个数据，加括号调用函数，
      this.getHomeMultidata()
      //2、获取商品的所有信息
      this.getHomeGoods('pop')
      this.getHomeGoods('news')
      this.getHomeGoods('sell')
    },
    methods:{
      /**
       * 事件监听的方法
       */
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },


      /**
       * 网络请求的方法
      */
      getHomeMultidata(){
        getHomeMultidata().then((res)=>{
          // console.log(res);
          // this.results = res
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then((res)=>{
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
      }
    },

    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    }
      
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
