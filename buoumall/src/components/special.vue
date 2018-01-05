<template>
	<div >
<!-- 		<ul class="nav">
			<li class="active"><span>推荐</span></li>
			<li v-for="data in shoplistData"><span>{{data.name}}</span></li>
		</ul>

		<shoplist></shoplist>
		
	 -->	
	</div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import axios from "axios";
import router from "@/router";

// import shoplist from "@/components/shoplist.vue";



export default{
	name: 'shop',
	data () {
		return {
			shoplistData: null,
		}
	},
	mounted() {
		//http://api.buoumall.com/v2/category/getChildCategory
		// axios.get("/v2/category/getChildCategory").then(res=>{
		//   this.shoplistData =res.data.data;
		// });
	},
	components: {
		// shoplist,
	}

}
	
</script>

<style lang="scss" scoped>
	// div{
	// 	.nav{
	// 		display:flex;
	// 		justify-content: space-between;
	// 		padding:0;
	// 		border-top:2px solid #ccc;
	// 		background:#ffffff;
	// 		li{
	// 			text-align: center;
	// 			list-style: none;
	// 			width:25%;
	// 			height:0.46rem;
	// 			line-height:0.46rem;
	// 			span{
	// 				height:0.42rem;
	// 				display:inline-block;
	// 				font-size:16px;
	// 				color:#888;
	// 			}
	// 		}
	// 		.active{
	// 			span{
	// 				border-bottom: 2px solid #ec9182;
	// 				color:#ec9182;
	// 			}
	// 		}
	// 	}
	// }
</style>