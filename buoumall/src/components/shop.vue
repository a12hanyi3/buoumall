<template>
	<div>
		<ul class="nav">
			<li class="active"><span>推荐</span></li>
			<li v-for="data in shoplist"><span>{{data.name}}</span></li>
		</ul>
		<swiper></swiper>
		
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router";
import swiper from "@/components/shoplist-swiper.vue";

export default{
	name: 'shop',
	data () {
		return {
			shoplist: null,
		}
	},
	mounted() {
		//http://api.buoumall.com/v2/category/getChildCategory
		axios.get("/v2/category/getChildCategory").then(res=>{
		  this.shoplist =res.data.data;
		});
	},
	components: {
		swiper,
	}

}
	
</script>

<style lang="scss" scoped>
	div{
		.nav{
			display:flex;
			justify-content: space-between;
			padding:0;
			border-top:2px solid #ccc;
			background:#ffffff;
			li{
				text-align: center;
				list-style: none;
				width:25%;
				height:0.46rem;
				line-height:0.46rem;
				span{
					height:0.42rem;
					display:inline-block;
					font-size:16px;
					color:#888;
				}
			}
			.active{
				span{
					border-bottom: 2px solid #ec9182;
					color:#ec9182;
				}
			}

		}
	}
</style>