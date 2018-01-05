<template>
	<swipe class="my-swipe" :auto="0" :showIndicators="false" >
		<swipe-item class="big" style="overflow:scroll">
			<shoplistPage1></shoplistPage1>
		</swipe-item>
		<swipe-item class="big" style="overflow:scroll">
			<shoplistPage2></shoplistPage2>
		</swipe-item>
		<swipe-item class="big" style="overflow:scroll">
			<shoplistPage3></shoplistPage3>
		</swipe-item>
		<swipe-item class="big" style="overflow:scroll">
			<shoplistPage4></shoplistPage4>
		</swipe-item>
	</swipe>
</template>



<script>
require('vue-swipe/dist/vue-swipe.css');

import axios from "axios";
import router from "@/router";
import {Swipe, SwipeItem} from "vue-swipe";
import shoplistPage1 from "@/components/shoplist-page1";
import shoplistPage2 from "@/components/shoplist-page2";
import shoplistPage3 from "@/components/shoplist-page3";
import shoplistPage4 from "@/components/shoplist-page4";



export default{
	name: 'shoplist',
	data () {
		return {
			shoplist: [],
		}
	},
	mounted() {
		
	},
	components:{
		"swipe" : Swipe,
		"swipe-item" : SwipeItem,
		shoplistPage1,
		shoplistPage2,
		shoplistPage3,
		shoplistPage4,
	}
}	
</script>

<style lang="scss" scoped>
	.my-swipe{
		height:5.3rem;
		width:100%;
		text-align:center;
		img{
	    	height:100%;
	    }
	    .mint-swipe-indicators{
	    	position:absolute;
	    	bottom:20px;
	    	height:0.2rem; 
	    }
	}

    
</style>