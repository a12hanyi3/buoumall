<template>
<div style="overflow:hidden">
	<headers></headers>
	<div class="main">
		<ul class="nav">
<!-- 			<li class="active click"  v-change="1" @click="componentChange(0)"><span>推荐</span></li> -->
			<li v-for="(data,index) in shoplistData" class="click" @click="componentChange(index)"><span>{{data.name}}</span></li>
		</ul>
		<transition  name="bounce" mode="out-in">
			<keep-alive>
				<component :is="currentView"></component>
			</keep-alive>	
		</transition>	
	</div>
		
	<footers></footers>
</div>
</template>

<script>



require('vue-swipe/dist/vue-swipe.css');
import Vue from 'vue';
import axios from "axios";
import router from "@/router";
import headers from "@/components/common/header"
import footers from "@/components/common/footer"
import shoplist from "@/components/shoplist.vue";
import shoplist1 from "@/components/shoplist1.vue";
import shoplist2 from "@/components/shoplist2.vue";
import shoplist3 from "@/components/shoplist3.vue";


export default{
	name: 'shop',
	data () {
		return {
			shoplistData: [],
			currentView:shoplist,
			surrent:[shoplist, shoplist1, shoplist2, shoplist3],
		}
	},
	mounted() {
		axios.get("/v2/category/getChildCategory").then(res=>{
			var obj = {name:'推荐'}
			res.data.data.unshift(obj)
		  this.shoplistData =res.data.data
		  // console.log(res.data.data)

		}).then(()=>{
			  	var lists = document.querySelectorAll('.click')
				lists[0].className = "click active"

		})
		  	
	},
	components: {
		shoplist,
		headers,
		footers
	},
	methods:{
		componentChange(index){
			this.currentView = this.surrent[index]
			var lists = document.querySelectorAll('.click')
					for(let j=0; j<lists.length; j++){
						lists[j].className = 'click'
					}
					lists[index].className = "click active"
		}
	}
}

	
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: translateX(3.75rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-3.75rem);
  }
}

.main{
	flex:1;
}

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
</style>