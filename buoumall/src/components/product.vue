<template>
	<div>	
		<div class="view-header">
			<div class="head-back" style="float:left">
				<i class="iconfont">&#xe697;</i>
			</div>
			
			<div style="float:right" class="head-handbag">
				<i class="iconfont">&#xe699;</i>
			</div>
			<router-link to="/login" style="float:right" class="head-more" tag="div">
				<i class="iconfont">&#xe6d1;</i>
			</router-link>
		</div>
		<div style="overflow:scroll" class="all">
			<swiper :options="swiperOption" class="my-swipe">
			   <swiperSlide v-for="data in swipers" :key="data">
			   	<img :src="'http://image.buoumall.com/'+data">
			   </swiperSlide>
			   <div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<div class="product-infos">
				<h1></h1>
				<div class="product-price"></div>
			</div>
			<div class="product-tips">
				<span><i class="iconfont">&#xe6b1;</i>交易担保</span>
				<span><i class="iconfont">&#xe6b1;</i>正品保障</span>
				<span><i class="iconfont">&#xe6b1;</i>七天退换</span>
			</div>
			<div class="prod-designer">
				<h2>设计师</h2>
				<img :src="avatar"/>
				<div class="des-infos">
					<span class="nickname">{{seller.nickname}}<i class="iconfont">&#xe6a7;</i></span>
					<span class="signature">{{seller.signature}}</span>
				</div>
			</div>
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
import {swiper, swiperSlide} from "vue-awesome-swiper";

export default{
	name: 'product',
	data () {
		return {
			params:"",
			swipers:[],
			avatar:null,
			seller:[],
			swiperOption: {
		        pagination: {
		           el: '.swiper-pagination'
		         },
		    },
		    loading:true,		       
		}
	},
	mounted() {
		// loading.open();
		this.params = this.$route.params.id;
		axios.get("/v2/product/get/"+this.params).then(res=>{
		  this.swipers =res.data.data.mainPics;
		  this.seller = res.data.data.seller;
		  this.avatar = 'http://image.buoumall.com/'+res.data.data.seller.avatar;
		  // console.log(this.avatar);
		  // loading.close();
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
		background:#ccc;
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
		margin-left:5px;
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
div{
	box-sizing: border-box;
}
.all{
	margin-bottom:0.49rem;
}
.product-infos{
	width:100%;
	height:0.87rem;
	padding:0.14rem;
}
.product-tips{
	width:100%;
	padding:0.14rem;
	height:0.46rem;
	span{
		margin-right: .3rem;
		font-size: .12rem;
		color:#999;
		.iconfont{
			margin-right:0.04rem;
		}
	}
}
.prod-designer{
	margin:0.1rem 0;
	width:100%;
	height:1.33rem;
	padding:0 0.14rem 0.14rem;
	h2{
		height:0.59rem;
		padding: 0.2rem 0;
		font-size:0.16rem;
		font-weight:700;
		color:#333;
		box-sizing: border-box;
	}
	img{
		width:0.6rem;
		height:0.6rem;
		border-radius:50%;
		float:left;
	}
	.des-infos{
		width:2.75rem;
		float:right;
		height: 0.6rem;
		padding-right:0.15rem;
		span{
			display:block;
		}
		.nickname{
			font-size:0.16rem;
			height:0.35rem;
			line-height: 0.35rem;
			color:#666;
			.iconfont{
				float:right;
				height:0.16rem;
				margin-top:0.15rem;
			}
		}
		.signature{
			font-size:0.12rem;
			height:0.25rem;
			line-height: 0.25rem;
			color: #aaa;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width:2.6rem;
		}

	}
}

.view-footer{
	height:0.49rem;
	width:100%;
	position: fixed;
	bottom: 0;
	background:#fff;
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
		span{
			display:inline-block;
			width:1.17rem;
			text-align: center;
			height:100%;
			line-height:0.49rem;
		}
		.btn-cart{
			background:#5c5f67;
		}
		.btn-buy{
			background:#ec9182;
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