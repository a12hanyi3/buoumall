<template>


    <el-container>
      <headers></headers>
        <div id= "all">
        <div class="nav">
          <p class="active" v-clk="'0'">今日LOOK</p>
          <p v-clk="'1'">画报</p>
          <p v-clk="'2'">专访</p>
          <p v-clk="'3'">动态</p>
        </div>
        <mt-swipe :auto="0" :continuous="false" :showIndicators="false">
          <mt-swipe-item style="overflow-Y: auto;overflow-X:hidden"><todayLook></todayLook></mt-swipe-item>
          <mt-swipe-item style="overflow-Y: auto;overflow-X:hidden"><pic></pic></mt-swipe-item>
          <mt-swipe-item style="overflow-Y: auto;overflow-X:hidden"><interview></interview></mt-swipe-item>
          <mt-swipe-item style="overflow-Y: auto;overflow-X:hidden"><trends></trends></mt-swipe-item>
        </mt-swipe>
        </div>
      <footers></footers>
    </el-container>




</template>
<script>
import todayLook from "./todayLook";
import pic from "./pic";
import Vue from 'vue';
import headers from "./common/header";
import footers from "./common/footer";
import interview from "./interview";
import trends from "./trends";
// Vue.directive('swp',function(el,binding,vnode){
//   window.onload=function(){
//     var swpAll = document.querySelector('.mint-swipe-indicators');
//     swpAll.style.display='flex';
//     var swp = document.querySelectorAll('.mint-swipe-indicators .mint-swipe-indicator');
//       swp[0].innerHTML='今日LOOK';
//       swp[1].innerHTML='画报';
//       swp[2].innerHTML='专访';
//       swp[3].innerHTML='动态';
//       for(var i=0;i<swp.length;i++){
//         //swp[i];
//       }
//   }
  

// })
Vue.directive('clk',function(el,binding,vnode){
  el.onclick=function(){
    var swp = document.querySelectorAll('.mint-swipe-item');
    var p = document.querySelectorAll('.nav p');
    for(var i=0;i<p.length;i++){
      p[i].index = i;
      p[i].setAttribute('class','');
      swp[i].setAttribute('class','mint-swipe-item')
    }
    this.setAttribute('class','active');
    swp[this.index].setAttribute('class','mint-swipe-item is-active');
    // swp[this.index].style.transform='translate3d(-3.6rem,0,0)'
    // swp[this.index].style.transition='transform 0.5s linear'
  }
})
export default {
  name: 'home',
  components:{
    todayLook,
    pic,
    headers,
    footers,
    interview,
    trends
  },
}
</script>
<style lang="scss" scoped>
#all{
  flex:1;
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
  //height:5.7rem;
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
</style>