<template>
	<div >
	</div>
</template>

<script>

import axios from "axios";


export default{
	name: 'shop',
	data () {
		return {
			shoplistData: null,
		}
	},
	mounted() {
		this.shoplistData = this.$route.params.id
		axios.get("/v2/product/get/"+this.shoplistData).then(res=>{
		  // this.swipers =res.data.data.mainPics;
		  // this.seller = res.data.data.seller;
		  // this.avatar = 'http://image.buoumall.com/'+res.data.data.seller.avatar;
		})
	},
}
	
</script>

<style lang="scss" scoped>

</style>