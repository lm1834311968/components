<template>
	<div class="article-item clear">
		<img  v-lazy="subItem.picSrc" :key="subItem.picSrc"/>
		<div class="article-content">{{subItem.content}}</div>
		<div class="article-createTime">{{subItem.createTime}}</div>
		<div class="article-zamNum"><i class="icon-cainixihuan iconfont"></i>{{subItem.zamNum}}</div>

		
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
.article-item{
	padding: 0.1rem;
	line-height: 0.26rem;
	img{
		width: 100%;
		height: 2rem;
		margin: 0 auto;
		display: block;
	}
	.article-createTime{
		color: #999;
		font-size: 0.1rem;
		float: left;
		
	}
	.article-zamNum{
		.iconfont{
			font-size: 0.16rem;
		}
		color: #999;
		font-size: 0.1rem;
		float: right;
	}
}
</style>