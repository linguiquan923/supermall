<template>
  <div class="detainavbar">
      <nav-bar>
          <div slot="left" class="backImage" @click="imageClick">
              <img src="~assets/img/common/back.svg"/>
          </div>
          <div slot="center" class="nav-bar">
              <div v-for="(item,index) in titles" 
                    :key="item" 
                    class="nav-bar-item"
                    @click="titleClick(index)"
                    :class="{active: currentIndex == index}">
                      {{item}}
            </div>
          </div>
        </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name:'detainavbar',
    components:{
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods:{
        titleClick(index){
            //点击对应的标题变色
            // console.log(index);
            this.currentIndex = index
            //点击传出事件，点击标题的时候滑动到对应的内容
            this.$emit('titleClick',index)
        },
        imageClick(){
            this.$router.back()
        },
        setDetailNavIndex(index){
            this.currentIndex = index
        }
    }
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        font-size: 12px;
    }
    .nav-bar-item{
        flex: 1;
    }
    .active{
        color: red;
    }
    .backImage{
        margin-top: 8px;
    }

</style>