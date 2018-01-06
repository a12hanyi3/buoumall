<template>


    <el-container>
      <headers></headers>
        <div id= "all">

        <swiper :options="swiperOption" ref="mySwiper" style="height:75%">

            <div class="swiper-pagination"  slot="pagination"></div>


            <swiperSlide  style="overflow-Y: auto;overflow-X:hidden">
              <todayLook></todayLook>
            </swiperSlide>
            <swiperSlide  style="overflow-Y: auto;overflow-X:hidden">
              <pic></pic>
            </swiperSlide>
            <swiperSlide  style="overflow-Y: auto;overflow-X:hidden">
              <interview></interview>
            </swiperSlide>
            <swiperSlide  style="overflow-Y: auto;overflow-X:hidden">
              <trends></trends>
            </swiperSlide>

       </swiper>
        </div>
      <footers></footers>
    </el-container>

</template>
<script>
import { Indicator } from 'mint-ui';
import todayLook from "./todayLook";
import pic from "./pic";
import Vue from 'vue';
import headers from "./common/header";
import footers from "./common/footer";
import interview from "./interview";
import trends from "./trends";
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';


export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
          pagination: {
             el: '.swiper-pagination',
             clickable: true,
             clickableClass : 'my-pagination-clickable',
            renderBullet: function (index, className) {
              var arr=['今日LOOK','画报','专访','动态']
              var pagspan = '<span class="' + className + ' bullet">' + arr[index] + '</span>';
          return pagspan;
            } 
        },
        },

    }
  },
  mounted(){
    var bullet =document.querySelectorAll('.swiper-pagination-bullet')
    for(var i=0;i<bullet.length;i++){
      bullet[i].style.width='20%'
      bullet[i].style.height='auto'
      bullet[i].style.borderRadius='0'
      bullet[i].style.background='#fff'
      bullet[i].style.fontSize='0.14rem'
    }
  },
  components:{
    todayLook,
    pic,
    headers,
    footers,
    interview,
    trends,
    swiper,
    swiperSlide
  },
}
</script>
<style lang="scss" scoped>
#all{
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 0.4rem;
  margin-bottom: 0.49rem;
}
.nav{
  display: flex;
  justify-content:space-around;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 14px;
  padding:0 0.5rem;
}
.mint-swipe{
  background: #e4e5ea;
}
.active{
  color: #f00;
}
.el-container {
  height:100%;

} 

.el-container{

  flex-direction:column;
}
.swiper-pagination{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height:0.44rem;
}



.swiper-container{
  padding-top: .4rem;
}
</style>