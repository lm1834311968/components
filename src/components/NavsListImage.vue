<template>
	<div class="m-list-item">
		<div class="item-content">
			<h5>{{subItem.title}}</h5>
			<div class="item-other">
				<span>{{subItem.source}}</span><span>{{subItem.comment}}(评)</span><span>{{subItem.glance}}(浏)</span>
			</div>
		</div>
		<div class="item-img">
			<img  v-lazy="subItem.images[0]" />
		</div>
		
	</div>
</template>

<script>
	//新闻列表的一个样式组件
	export default{
		props:{
			subItem:{}
		}
	}
</script>

<style lang="less" scoped>
.m-list-item{
	display: flex;
	padding: 0.1rem;
	.item-content{
		flex: 1;
		h5{
			font-weight: normal;
			font-size: 0.16rem;
			line-height: 0.21rem;
			padding-right: 0.1rem;
		}
		.item-other{
			font-size: 0.12rem;
			color:#999 ;
			padding-top: 0.06rem;
			span{
				padding-right:0.1rem;
			}
		}
	}
	.item-img{
		width: 33%;
		height: 0.8rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>