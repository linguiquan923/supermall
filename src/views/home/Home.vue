<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
    <tab-control :titles="['流行','新款','精选']" 
                  class="tab-control tab-control-top"
                  @tabClick="tabClick"
                  ref="tabControl1"
                  v-show="isTabFixed"
                  />
    <div>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="0" 
            :pull-up-load="isPullUpLoad" 
            @scroll="contentScroll"
            @pullingUp="moreLoad">
      <home-swiper :banners="banners"
                    @swiperimageload="swiperimageload"
      />
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" 
                  class="tab-control"
                  @tabClick="tabClick"
                  ref="tabControl"
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
    </scroll>

    <back-top @click.native = "backClick" v-show="isShowBackTop"/>
    </div>
  </div>
</template>

<script>
//公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue';
import BackTop from 'components/content/backTop/BackTop.vue';
import {itemListenerMixin} from 'common/mixin'


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
      Scroll,
      BackTop,

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
          'new':{page: 0 , list:[]},
          'sell':{page: 0 , list:[]},
        },
        currentType: 'pop',
        isShowBackTop: false,
        isPullUpLoad: true,
        tabOffsetTop: 0,
        isTabFixed: false

      }
    },
    mixins:[itemListenerMixin],
    methods:{
      /**
       * 事件监听的方法
       */
      //监听点击的是哪个页面的数据
      tabClick(index){
        // console.log('the index = '+index);
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
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl1.currentIndex = index

      },
      backClick(){
        // console.log("backClick");
        this.$refs.scroll.scrollTo(0,0,1000)
      },
      //获取从scroll传来的位置信息
      contentScroll(position){
        //1、判断是否显示返回顶部的按钮
        // console.log(position);
        if(-position.y > 1000){
          this.isShowBackTop = true
        }else if(-position.y <= 1000){
          this.isShowBackTop = false
        }

      // console.log(this.$refs.tabControl.$el.offsetTop);
        //2、判断是否显示TabControl
        this.isTabFixed = (-position.y) > this.$refs.tabControl.$el.offsetTop - 22
        
      },
      moreLoad(){
        this.getHomeGoods(this.currentType)
        console.log('Loading.......');
        //上拉请求完之后要继续上拉的话要调用finishPullUp()，在getHomeGoods实现
      },
      swiperimageload(){
        // console.log('1111');
        //1、获取tabControl的offsetTop
      //所有的组件都有一个属性$el，用来获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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

        //把finishPullUp的方法在scroll封装
        this.$refs.scroll.finishPullUp()
        
      })
      }
    },

    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    //创建
    created() {
      //1、请求多个数据，加括号调用函数，
      this.getHomeMultidata()
      //2、获取商品的所有信息
      this.getHomeGoods('pop')
      this.getHomeGoods('news')
      this.getHomeGoods('sell')
    },
    //销毁
    destroyed(){
      console.log("destroy");
    },
    //钩子函数
    mounted(){
      console.log("我是Home");
    },
    //进入
    activated(){
        // console.log('进入');
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
    },
    //离开
    deactivated(){
        this.saveY = this.$refs.scroll.getScrollY()
        // console.log(this.saveY)

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
    z-index: 8;
  }
  .tab-control{
    top: 22px;
  }
  .tab-control-top{
    position: relative;
    top: 22px;
    z-index: 9;
    background-color: white;
  }
  .content{
    position: absolute;
    top: 22px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

</style>
