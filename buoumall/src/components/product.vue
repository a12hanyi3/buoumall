<template>
	<div>
<!-- 		<swipe class="my-swipe">
			<swipe-item v-for="(data,index) in swiper" :key="data" >

					<img :src="'http://image.buoumall.com/'+data">

			</swipe-item>
		</swipe>
 -->	
 		<swiper :options="swiperOption" class="my-swipe" >
 			<div class="view-header">
 				<div class="head-back">
 					<i class="iconfont">&#xe697;</i>
 				</div>
 			</div>

 		   <swiperSlide v-for="data in swiper" :key="data">
 		   	<img :src="'http://image.buoumall.com/'+data">
 		   </swiperSlide>
 		   <div class="swiper-pagination" slot="pagination"></div>
 		</swiper>
 	</div>
</template>

<script>
// require('vue-swipe/dist/vue-swipe.css');
 
import 'swiper/dist/css/swiper.css';
import axios from "axios";
import router from "@/router";
// import {Swipe, SwipeItem} from "vue-swipe";
import {swiper, swiperSlide} from "vue-awesome-swiper"

export default{
	name: 'product',
	data () {
		return {
			params:"",
			swiper:[],

			swiperOption: {
		        pagination: {
		           el: '.swiper-pagination'
		         },
		         // some swiper options...
		         // autoplay:true,
		         controller: true,
		         // speed:500,
		         // loop : true,
		         // slidesPerView: 'auto',
		         // loopedSlides: 2,
		         // loopAdditionalSlides : 1,
		       },
		       
		}
	},
	mounted() {

		// console.log(this.$route.params.id);
		this.params = this.$route.params.id;
		axios.get("/v2/product/get/"+this.params).then(res=>{
		  this.swiper =res.data.data.mainPics;
		});


	},
	components:{

		swiper,
		swiperSlide,
	},
	computed: {

	    },
 
	methods: { 

	} 

}
	
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
.view-header{
	position: fixed;
	top:0;
	z-index: 1000;
	.head-back{
		width:0.3rem;
		height:0.3rem;
		border-radius: 50%;
		background:#fff;
		text-align: center;
		line-height:0.3rem;
		.iconfont{
			width:0.26rem;
			height:0.26rem;
			font-size: 26px;
			display: inline-block;
		}
	}
}
.my-swipe{
	width:100%;
	height:5rem;
	z-index: 10;
	img{
		width:100%;
	}
}
</style>