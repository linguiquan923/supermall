<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <!-- <a :href="item.link"> -->
        <img :src="item.image" @click="imageClick"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type: Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      imageClick(){
        // console.log('我是recommend的点击事件')
        this.$router.push({
          path:'/detail',
          query:{
            iid:111
          }
        })
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
  }
</style>
