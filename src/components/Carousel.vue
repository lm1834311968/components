<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="(item,index) in imgList" :key="index">
			<img  :src="item.img"/>
		</swiper-slide>
		 <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>
<script>
	//封装轮播图组件
	export default{
		props:{
			imgList:{},
			swiperOption:{}
		},
		data(){
			return {
				
			}
		}
	}
</script>
<style class="less" scoped>

</style>