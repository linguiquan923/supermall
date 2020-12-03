<template>
  <div class="detainavbar">
      <nav-bar>
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
            console.log(index);
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

</style>