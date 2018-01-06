<template>
  <ul>
  	<router-link :to="'/look/'+data.id" tag="li" :key="data.id" v-for="(data,index) in datalist">
  		<div class="look-over">
  			<img :src="'http://image.buoumall.com/'+data.cover" alt="">
  		</div>
  		<div class="look-infos">
  			<p style="font-size: 12px;font-weight: bold">{{data.title}}</p>
  			<p>{{data.description}}</p>
  		</div>
  	</router-link>
  </ul>
</template>

<script>
import { Indicator } from 'mint-ui';
import axios from "axios";
export default {
  name: 'todayLook',
  data(){
  	return {
  		datalist:[]
  	}
  },
  mounted(){
  	Indicator.open();
  	axios.post('/look/list','memberToken=&pageNum=1&pageSize=20').then(res=>{
  		this.datalist=res.data.data.list
  		Indicator.close();
  	})
  	
  }
}
</script>

<style lang="scss" scoped>
img{
	width:1.86rem;
	height:2.53rem;
}
ul{
	list-style: none;
	display: flex;
	flex-wrap:wrap;
	justify-content:space-between;
}
li{
	width:1.86rem;
	height:2.53rem;
	position: relative;
	margin-top: 0.03rem;

}
.look-over{
	display:inline-block;
	width:1.86rem;
	height:2.53rem;
}
.look-infos{
	width:1.66rem;
	line-height:0.2rem;
	position: absolute;
	bottom: 0;
	left: 0;
	color: #fff;
	font-size: 14px;
	padding:0.1rem;
}
</style>
