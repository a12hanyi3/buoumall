<template>

<div>
	
<swiper :options="swiperOption" ref="mySwiper">

    <swiperSlide v-for="data,index in datalist" :key="data.id">
    	<img :src="'http://image.buoumall.com/'+data.picture" alt="">
    </swiperSlide>

    	<div class="swiper-pagination"  slot="pagination"></div>

</swiper>
<div class="back-btn">
	<i class="iconfont icon-back"></i>
</div>
	
</div>
</template>
	
<script>
import Vue from "vue";
import axios from "axios";
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {

  name: 'look',

  data () {
    return {
    	swiperOption: {
          pagination: {
		         el: '.swiper-pagination',
		         type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
                 ' / ' +
                 '<span class="' + totalClass + '"></span>';
		         },	         
        },
        },
        datalist:[]
    }
  },
    components: {
    swiper,
    swiperSlide
  },
  mounted(){
  	
  	//http://api.buoumall.com/look/detail
  	axios.post('/look/detail','memberToken=&lookId='+this.$route.params.id).then(res=>{
  		this.datalist=res.data.data.lookDetails
  	})
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
.swiper-slide{
	img{
		height: 5rem;
	}
}
.back-btn{
	width: .3rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    position: fixed;
    top: .05rem;
    left: .05rem;
    z-index: 9999;
    background: hsla(0,0%,100%,.9);
    color: #333;
    border-radius: 50%;
    overflow: hidden;
}
.icon-back{

	font-size: 0.3rem;
}
.swiper-pagination{
	width: .3rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    top: .05rem!important;
    right: .05rem!important;
    left: auto;
    z-index: 99;
    background: hsla(0,0%,100%,.9);
    color: #333;
    border-radius: 50%;
    overflow: hidden;
    text-indent: -0.005rem;
    letter-spacing: -0.01rem;
    font-size: 0.014rem;
}
</style>