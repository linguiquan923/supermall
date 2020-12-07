<template>
  <div class="detail">
      <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="detailnavbar"></detail-nav-bar>
  
        <scroll class="swiper" 
                ref="swiper"
                :probe-type="3"
                @scroll="contentScroll">
            <detail-item :topImages="topImages" @imgLoad = "imgLoad"></detail-item>
            <div>购物车总数量{{$store.state.carList.length}}</div>
            <div v-if="$store.state.carList[0]">购物车物品相同{{$store.state.carList[0].count}}</div>

            <detail-shop-info :shop="shop"></detail-shop-info>
            <div ref="params">
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
                <h2>我是详情页{{iid}}</h2>
            </div>
           <div ref="comment">
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>
            <h2>我是内容{{iid}}</h2>

           </div>
           <div ref="recommend">
            <h2>我是详情页{{iid}}</h2>
             <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
             <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
            <h2>我是详情页{{iid}}</h2>
           </div>
        </scroll>
        <back-top v-show="isShowBackTop" @click.native="backTop"/>
        <detail-bottom-bar @addToCar="addToCar"/>
        <toast ref="toast"></toast>
        
  </div>
</template>

<script>
//子组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailItem from './childComps/DetailItem'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailBottomBar from './childComps/DetailBottomBar.vue'



//公共组件
import Scroll from 'components/common/scroll/Scroll'
import {itemListenerMixin,backTopMixin} from 'common/mixin'
import {debounce} from 'common/utils'
import Toast  from 'components/common/toast/Toast'



//方法和构造
import {getDetail,Shop} from 'network/detail'

export default {
    name: 'detail',
    components:{
        DetailNavBar,
        DetailItem,
        DetailShopInfo,
        Scroll,
        DetailBottomBar,
        Toast
    },
 
    data(){
        return{
            iid: null,
            topImages:['https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2540444652,653618423&fm=26&gp=0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607055576730&di=75c22d1cdd443437ed8ea9eb99aa8c52&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F20%2F20180820222903_ntowb.jpg',
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3599475514,2710235154&fm=26&gp=0.jpg'],
            shop:{
                logo:'1',
                name: '2',
                fans: '3456',
                sells: '6789',
                score: '10',
                goodsCount: '123456'
            },
            themeTopYs:[],
            themeOffsetTop:null,
            
        }
    },
    methods:{
        //详情页点击主题滑动到对应的位置
        titleClick(index){
            //测试成功
            // console.log(index);
            this.$refs.swiper.scrollTo(0,-this.themeTopYs[index],300)
        },
        //检测DetailItem图片加载
        imgLoad(){
            // console.log('imgLoad')
            //执行获取offsetTop函数
            this.themeOffsetTop()
        },
        contentScroll(position){
            //1、判断是否显示返回顶部的按钮
            // console.log(position);
            if(-position.y > 1000){
            this.isShowBackTop = true
            }else if(-position.y <= 1000){
            this.isShowBackTop = false
            }
            // console.log(position)
            //获取y值
            const y = -position.y
            //根据范围内容去判断
            // console.log(this.themeTopYs);
            const length = this.themeTopYs.length
            // console.log(length);
            // for(let i = 0 ; i < length ; i++){
            //     if(
            //         ( i < length - 1 && this.themeTopYs[i] < y && this.themeTopYs[i+1] > y)
            //     ||
            //     ( i === length-1 && this.themeTopYs[i] < y))
            //     {
            //         // console.log(y);
            //         this.$refs.detailnavbar.setDetailNavIndex(i)
            //     }   
            // }
            for(let i = 0 ; i < length -1 ; i++){
                if(y > this.themeTopYs[i] && y < this.themeTopYs[i+1]){
                    
                    this.$refs.detailnavbar.setDetailNavIndex(i)
                }
            }
        },
        //检测添加到购物车响应事件
        addToCar(){
            // console.log('检测添加到购物车响应事件');
            //1、在这里获取商品信息，只获取购物车需要的信息
            //假数据
            const product = {}
            product.image = this.topImages[0];
            product.title = 'clothes'
            product.desc = 'girl clothes'
            product.price = '78.23';
            product.iid = '111';
            product.count = 1;

            //2、将商品添加到购物车，依赖Vuex
            this.$store.dispatch('addCarList',product).then((res)=>{
                // console.log(res);
                this.$toast.show(res,2000)
            })

            //3、确定
            
            // console.log(this.$refs.toast);
            // this.$refs.toast.show('hhahahha',2000)

            //刷新
                
            
        }

    },
    created(){
       //1、获取iid
        this.iid = this.$route.query.iid
        
        // console.log(this.iid);
        //2、请求iid的数据
        getDetail(this.iid).then((res)=>{
            // console.log(' i am the Detail')
            // console.log(res);
            //1、获取顶部轮播图的图片
            const data = res.result
            this.topImages = data.itemInfo.topImages

            //3、创建店铺信息的对象
            this.shop = new Shop(data.shopInfo)

            
        })

             //4、创建对象存储防抖函数
            //利用防抖函数获取offsetTop
            this.themeOffsetTop = debounce(()=>{
                console.log('防抖函数使用第二次');
                this.themeTopYs = []
                this.themeTopYs.push(0)
                this.themeTopYs.push(this.$refs.params.offsetTop)
                this.themeTopYs.push(this.$refs.comment.offsetTop)
                this.themeTopYs.push(this.$refs.recommend.offsetTop)
                this.themeTopYs.push(Number.MAX_VALUE)
            },50)

        // 设置详情页的标题点击可以滑动到对应的界面
        // this.$nextTick(()=>{
        //      //获取各个标题的offsetTop
        //     //但是在这里的话我们的图片是还没有加载出来，依旧会出现错误
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.offsetTop)
        // console.log('lllllllll');
        // })
  

    },
    mixins:[itemListenerMixin,backTopMixin],
    mounted(){
        // console.log("我是Detail的mounted");
        // console.log(this.$refs.swiper);
    }
}
</script>

<style scoped>
    .detail{
        position: relative;
        height: 100vh;
    }  
    .detail-nav-bar{
        position: relative;
        background-color: white;
        z-index: 9;
    } 
    .swiper{
        position: relative;
        height: calc(100% - 44px - 49px);
        z-index: 8;
        background-color: white;
    }


</style>