<template>

	<swipe class="my-swipe small">
		<swipe-item v-for="(data,index) in swiper" :key="data.link" >
			<router-link tag="li" :to="splctId(index)">
				<img :src="'http://image.buoumall.com/'+data.img">
			</router-link>
		</swipe-item>
	</swipe>

</template>



<script>
require('vue-swipe/dist/vue-swipe.css');

import axios from "axios";
import router from "@/router";
import {Swipe, SwipeItem} from "vue-swipe";



export default{
	name: 'swiper',
	data () {
		return {
			swiper: [],
		}
	},
	mounted() {

		axios.post("/banner/v1/list", "count=5&site=4").then(res=>{
		  this.swiper =res.data.data;
		});
		
	},
	methods:{
		splctId:function(index){
			var Reg = /id\/(\d*)$/;
			var id = this.swiper[index].link;
			id = Reg.test(id);
			return "/designer/"+RegExp.$1;
		}
	},

	components:{
		"swipe" : Swipe,
		"swipe-item" : SwipeItem
	}
}

	
</script>

<style lang="scss" scoped>
	.my-swipe{
		height:1.7rem;
		img{
	    	width:100%;
	    }
	    .mint-swipe-indicators{
	    	position:absolute;
	    	bottom:20px;
	    	width:100%;
	    	height:0.2rem; 
	    }
	}
	li{
		list-style:none;
	}
    
</style>