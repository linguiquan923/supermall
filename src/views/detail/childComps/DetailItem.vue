<template>
  <div class="detailswiper">
    <!-- {{topImages}} -->
    
    <swiper class="detailswiper1">
        <swiper-item v-for="(item,index) in topImages" :key="index">
            <img :src="item" @load="imgLoad"/>
            
        </swiper-item>
    </swiper>
    </div>

</template>

<script>

import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:'detailswiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    methods:{
        imgLoad(){
            this.$emit('imgLoad')
        }
    }
}
</script>

<style scoped>
.detailswiper1{
    height: 250px;
    overflow: hidden;
}
</style>>