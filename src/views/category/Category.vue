<template> 
<div class="wrapper" ref="aaa">
    
        <ul class="content">
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          <li>商品</li>
          
      </ul>
      <back-top></back-top>
</div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'
import Scroll from 'components/common/scroll/Scroll'
//引入backTop
import BackTop from 'components/content/backTop/BackTop'

export default {

    name: 'category',
    components:{
        Scroll,
        BackTop
    },
    data(){
        return{
            scroll: null
        }
    },
    mounted() {
        console.log(document.querySelector('.wrapper'))
        //默认情况下不侦测，probe侦测的意思
        //0,1都是不侦测
        //2：手指滑动的时候侦测
        //3: 只要滑动都侦测
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType: 3,
            pullUpLoad: true
        })
        this.scroll.on('scroll',(position)=>{
            // console.log(position)
        })
        this.scroll.on('pullingUp', ()=> {
            console.log('上拉加载中')
            //发送网络请求，请求更多数据

            //等待数据请求完成，而且将更新的数据展示出来之后
            setTimeout(() => {
                this.scroll.finishPullUp()
            }, 2000);
        })
    },
}
</script>

<style scoped>
    .wrapper{
        height: 200px;
        background-color: blanchedalmond;
        overflow: hidden;
    }
    .wrapper1{
        height: 300px;
        background-color: blanchedalmond;
        overflow: hidden;
    }
</style>