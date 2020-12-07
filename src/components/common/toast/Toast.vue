<template>
  <div class="toast" v-show="isShow" >
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'toast',
    props:{

    },
    data(){
        return{
            message:'',
            isShow:false,
        }
    },
    methods:{
        show(message='默认为自',duration=2000){
            console.log('我是Toast的方法');
            this.message = message
            this.isShow = true
            setTimeout(() => {
                console.log('我是timeout');
                this.message = ''
                this.isShow = false
            }, duration);
        },
      
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    background-color:rgba(0, 0, 0, 0.75);
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 5px;
    color: white;
}
</style>