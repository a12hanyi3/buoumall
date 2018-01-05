<template>
	<div>	
		<div class="view-header">
			<div class="head-back" style="float:left">
				<i class="iconfont">&#xe697;</i>
			</div>
			<div style="float:right" class="head-more">
				<i class="iconfont">&#xe699;</i>
			</div>
			<div style="float:right" class="head-handbag">
				<i class="iconfont">&#xe6d1;</i>
			</div>
		</div>
		<div style="overflow:scroll">
			<swiper :options="swiperOption" class="my-swipe" style="overflow:scroll">
			   <swiperSlide v-for="data in swipers" :key="data">
			   	<img :src="'http://image.buoumall.com/'+data">
			   </swiperSlide>
			   <div class="swiper-pagination" slot="pagination"></div>
			</swiper>

		</div>

		<div class="view-footer">
			<div class="footer-icon">
				<div>
					<i class="iconfont">&#xe7ce;</i>
				</div>
				<div>心愿单</div>
			</div>
			<div class="footer-btns">
				<span class="btn-cart">加入购物车</span>
				<span class="btn-buy">立即购买</span>
			</div>
		</div>
 	</div>
</template>

<script>

import 'swiper/dist/css/swiper.css';
import axios from "axios";
import router from "@/router";
import {swiper, swiperSlide} from "vue-awesome-swiper"

export default{
	name: 'product',
	data () {
		return {
			params:"",
			swipers:[],

			swiperOption: {
		        pagination: {
		           el: '.swiper-pagination'
		         },
		       },		       
		}
	},
	mounted() {
		this.params = this.$route.params.id;
		axios.get("/v2/product/get/"+this.params).then(res=>{
		  this.swipers =res.data.data.mainPics;
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
	padding:5px 5px;
	z-index: 1000;
	width:100%;
	box-sizing:border-box;
	div{
		width:0.3rem;
		height:0.3rem;
		border-radius: 50%;
		background:#ddd;
		text-align: center;
		line-height:0.3rem;
		opacity:.4;
		.iconfont{
			width:0.26rem;
			height:0.26rem;
			font-size: 26px;
			display: inline-block;
		}
	}
	.head-handbag{
		margin-right:5px;
		.iconfont{
			font-size: 20px;
		}
	}
	.head-more{
		.iconfont{
			font-size: 20px;
		}
	}
}
.view-footer{
	height:0.49rem;
	width:100%;
	position: fixed;
	bottom: 0;
	.footer-icon{
		float:left;
		width:1.35rem;
		height:100%;
		font-size: 12px;
		div{
			width:0.65rem;
			text-align: center;
			margin-bottom:4px;
			color:#999;
		}
	}
	.footer-btns{
		float:left;
		width:2.4rem;
		height:100%;
		font-size:16px;
		color:#fff;
		div{
			width:1.2rem;
			text-align: center;
			line-height:0.49rem;
		}
		.btn-cart{
			background:#5c5f67;
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