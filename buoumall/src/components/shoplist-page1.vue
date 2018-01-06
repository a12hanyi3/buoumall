<template>
<div class="shoplistpage1" >
	<swiper></swiper>
	<div class="shop-special">
		<h3>精选专区</h3>
		<ul>
			<router-link tag="li" v-for="(data,index) in shoplistup" :key="data.link" :to="splctId(index)">	
				<img :src="'http://image.buoumall.com/'+data.img" >
			</router-link>
		</ul>
	</div>
	<div class="shop-prods">
		<h3>猜你喜欢</h3>
		<ul>
			<router-link v-for="data in shoplistdown" :key="data.id" :to="'/product/'+data.id" tag="li">
				<img :src="'http://image.buoumall.com/'+data.listPic">
				<div class="li-name">
					{{data.name}}
				</div>
				<div class="li-price">
					￥<span>{{data.price}}</span>.00
				</div>
			</router-link>
		</ul>
	</div>
</div>
</template>
<script>
import axios from "axios";
import router from "@/router";
import swiper from "@/components/shoplist-swiper.vue";
import { Indicator } from 'mint-ui';


export default{
	name: 'shoplistpage1',
	data () {
		return {
			shoplistup:[],
			shoplistdown:[],
		}
	},
	mounted() {
		var bar1
		var bar2
		Indicator.open()
		axios.post("/banner/v1/list", "count=5&site=5").then(res=>{
		  this.shoplistup =res.data.data
		})
		axios.post("product/findGuessYouLikeProducts", "memberToken=&categoryId=&pageNo=1&pageSize=20").then(res=>{
		  this.shoplistdown =res.data.data.list
		  Indicator.close()
		})
			
		
	},
	methods:{
		splctId:function(index){
			var Reg = /id\/(\d*)$/;
			var id = this.shoplistup[index].link;
			id = Reg.test(id);
			return "/special/"+RegExp.$1;
		},
	},
	components:{
		swiper,
	},
}

	
</script>

<style lang="scss" scoped>
.shoplistpage1{
	width:100%;
	margin-bottom: 30px;
	h3{
		height:0.5rem;
		padding: 0 0.14rem;
		font-size: 16px;
		line-height:0.5rem;
		text-align: left;
		font-weight:100;
		background: #fff;
	}
	.shop-special{
		ul{
			display: flex;
			background:#fff;
			height:0.94rem;
			li{
				width:50%;
				img{
					width:1.66rem;
					height:0.8rem;
				}
			}

		}
	}
	.shop-prods{
		margin-top:0.14rem;
		ul{
			display:flex;
			background:#FFF;
			flex-wrap:wrap;
			box-sizing: border-box;
			li{
				box-sizing: border-box;
				width:50%;
				padding: 0.14rem 0.1rem;
				height:3.02rem;
				img{
					width:1.66rem;
				}
				div{
					font-size:14px;
					text-align: left;
				}
				.li-name{
					height: 0.3rem;
					line-height: 0.3rem;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;					
				}
				.li-price{
					height: 0.2rem;
					line-height: 0.2rem;
					color: #ec9182;
				}
			}


		}
	}
	li{
		list-style:none;
	}
}
    
</style>