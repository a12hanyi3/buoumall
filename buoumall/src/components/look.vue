<template>

<div>
	
<swiper :options="swiperOption" ref="mySwiper">

    <swiperSlide v-for="data,index in datalist" :key="data.id">
    	<img :src="'http://image.buoumall.com/'+data.picture" alt="">
    	<span class="head-info">{{data.detail}}</span>
    	
    </swiperSlide>

    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
<div class="back-btn" @click="click1">
	<i class="iconfont icon-back"></i>
</div>
<div class="look-infos">
	<span>
		<i class="iconfont icon-operation"></i>
		{{datalist2}}
	</span>
	<span>
		<i class="iconfont icon-atm"></i>
		{{datalist3}}
	</span>
</div>
<div class="view-footer">
	<div class="page-footer-action">
		<div class="at-left">
			<i class="iconfont icon-good"></i>
		</div>
		<div class="act-right">
			<i class="iconfont">&#xe611;</i>
			{{datalist4}}
			<i class="iconfont">&#xe6e6;</i>
			{{datalist5}}
		</div>
	</div>
</div>
<div class="middle">   &nbsp;&nbsp;搭配商品</div>
    <ul>
      <li v-for="(data,id) in tableinfo" :key="data.id">
            <aside>
        <img :src="'http://image.buoumall.com/'+data.listPic">
            </aside>
        <span>{{data.name}}</span>
        <article>
          ￥{{data.price}}
        </article>
        <div class="buy">立即购买</div>
      </li>
    </ul>           
</div>

</div>
</template>
	
<script>
import Vue from "vue";
import axios from "axios";
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import {Indicator} from "mint-ui"
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
        datalist:[],
        datalist2:'',
        datalist3:'',
        datalist4:'',
        datalist5:'',
        tableinfo:[]

    }
  },
    components: {
    swiper,
    swiperSlide
  },
  methods:{
  	click1(){
  		this.$router.go(-1)
  	}
  },
  mounted(){
  	Indicator.open()
  	//http://api.buoumall.com/look/detail
  	axios.post('/look/detail','memberToken=&lookId='+this.$route.params.id).then(res=>{
  		this.datalist=res.data.data.lookDetails
		this.datalist2=res.data.data.publishTime
		this.datalist3=res.data.data.viewNum
		this.datalist4=res.data.data.commentNum
		this.datalist5=res.data.data.likeNum          
    this.tableinfo = res.data.data.linkList;
    Indicator.close()
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
.head-info{
	background: #fff;
    display: block;
    padding: .14rem .14rem 0;
    line-height: .175rem;
    font-size: 0.14rem;
}
.look-infos{
	padding: .1rem .14rem .14rem;
    color: #bfc1c4;
    margin-bottom: .1rem;
    background: #fff;
    span{
    	margin-right: .15rem;
    	font-size: 0.14rem;
    }

}
.iconfont{
	font-family: "iconfont" !important;
    font-size: 0.16rem;
    font-style: normal;
}
.view-footer{

    height: .49rem;
    width: 100%;
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 0 0.005rem #a0a0a0;
    .page-footer-action{
    	height: .47rem;
    	line-height: .47rem;
    	padding: 0 .14rem;
    	color: #bfc1c4;
    	font-size: .16rem;
    	.at-left{
    		width: 1rem;
    		float: left;
    	}
    	.act-right{
    		margin-left: 1rem;
    		text-align: right;
    	}
    }
}

img{
  display: block;
  vertical-align: middle;
  width: 100%;
  border:0;
}
ul{
  margin-top: 5px;
  margin-bottom:0.49rem;

}
.middle{
  border-radius: 2px;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  letter-spacing: 4px;
  font-weight: bold;
  line-height: 40px; 
  margin-bottom:0.49rem;
}
span{
  display: inline-block;
  margin-left: 20px;
  margin-top: 2%;
 height: 40px;
 line-height: 40px;
}
aside{

  height: 150px;
  line-height: 150px;
  width: 110px;
  float: left;
}
aside img{
  margin-top: 10%;
   border-radius: 5px;
}
li{
  position: relative;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 170px;
}
p{
  margin-top: 20px;
}
article{
  position: absolute;
  bottom: 10%;
  left: 35%;
  color: red;
}
.buy{
  position: absolute;
  bottom: 10%;
  right: 5%;
  border-radius: 5px;
  background-color: #efb3a9;
  color: #fff;
  width: 25%;
  height:20%;
  line-height:32px;
  text-align: center;
}
.md{
  background-color: #ccc;
  width: 100%;
  height: 10px;
}

 @font-face {
  font-family: 'iconfont';
  src: url('../assets/fontx/iconfont.eot');
  src: url('../assets/fontx/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../assets/fontx/iconfont.woff') format('woff'),
  url('../assets/fontx/iconfont.ttf') format('truetype'),
  url('../assets/fontx/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>