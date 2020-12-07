<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
export default {
    name: "Scroll",
    props:{
        probeType:{
            type: Number,
            default: 0
        },
        pullUpLoad:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            scroll: null,
        }
    },
    methods:{
        scrollTo(x,y,time = 500){
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            //每次上拉加载完后要调用这个方法，才能继续下一次上拉
            this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll.refresh()
        },
        //返回y
        getScrollY(){
            return this.scroll ? this.scroll.y : 0 
        },
        
        
    },
    mounted(){
        // console.log(this.$refs.wrapper);
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        this.scroll.on('scroll',(position)=>{
            // console.log(position);
            this.$emit('scroll',position)
        })
        
        //3、监听滚动到底部
        if(this.scroll.pullUpLoad){
            //先判断是否存在pullUpLoad，存在的话再进行监听
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
            
        })
        }
    }
}
</script>

<style>

</style>