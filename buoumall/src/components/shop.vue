<template>
	<div>
		<ul>
			<li class="active">推荐</li>
			<li v-for="data in shoplist">{{data.name}}</li>
		</ul>
		<router-view></router-view>
		
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router";

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
		  console.log(res.data.data);
		  this.shoplist =res.data.data;
		});
	},

}
	
</script>

<style lang="scss" scoped>
	div{
		ul{
			display:flex;
			justify-content: space-between;
			padding:0;
			li{
				text-align: center;
				list-style: none;
				width:25%;
				height:0.46rem;
				line-height:0.46rem;
			}
		}
		.active{
			color:#ec9182
		}
	}
</style>