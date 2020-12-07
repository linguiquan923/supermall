
import BackTop from 'components/content/backTop/BackTop.vue';

export const itemListenerMixin = {
    mounted(){
        // console.log("我是混入的内容");
    }
}

export const backTopMixin = {
    components: {
        BackTop,
    },
    data(){
        return {
            isShowBackTop: false,
        }   
    },
    methods:{
        backTop(){
            this.$refs.swiper.scrollTo(0,0,300)
        }
    }
}
