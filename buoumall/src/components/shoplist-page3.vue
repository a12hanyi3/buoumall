<template>
<div class="shoplistpage3"  style="overflow:scroll">
	<div class="ass-categorys">
		<ul>
			<li v-for="data in shoplistup" :key="data.id">
				<img :src="'http://image.buoumall.com/'+data.cover" >
				<span>{{data.name}}</span>
			</li>
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
export default{
	name: 'shoplistpage3',
	data () {
		return {
			shoplistup:[],
			shoplistdown:[],
		}
	},
	mounted() {
		axios.post("/v2/category/getChildCategory", "categoryId=1002").then(res=>{
		  this.shoplistup =res.data.data;
		});
		axios.post("product/findGuessYouLikeProducts", "memberToken=&categoryId=1002&pageNo=1&pageSize=20").then(res=>{
		  this.shoplistdown =res.data.data.list;
		});
	},
	components:{
	}
}
</script>
<style lang="scss" scoped>
.shoplistpage3{
	width:100%;
	margin-bottom:30px;
	.ass-categorys{
		width:100%;
		ul{
			display:flex;
			flex-wrap:wrap;
			background:#fff;
			li{
				width:25%;
				height:1.04rem;
				padding:0.16rem 0;
				box-sizing: border-box;
				font-size:14px;
				img{
					width:0.5rem;
					height:0.5rem;
				}
				span{
					width:100%;
					display:block;
					margin-top:2px;
				}
			}

		}
	}
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
					height:2.24rem;
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