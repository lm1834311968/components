<template>
	<ul class="sub-navs">
		<li v-for="(item,index) in subName" @click='choose(index)' :class="indexNow==index?'active':''" :key="index">{{item.name}}</li>
	</ul>
</template>

<script>
	//新闻的列表头组件
	export default {
		props: {
			subName: Array,
			parIndexNow:Number
		},
		data() {
			return {
				indexNow: 0
			}
		},
		methods: {
			choose(index) {
				this.indexNow=index;
				this.$emit('choose',index);
			}
		},
		watch:{
			parIndexNow:function(newval,oldval){
				this.indexNow=newval;
			}
		}
	}
</script>

<style lang="less" scoped>
	.sub-navs {
		height: 0.4rem;
		line-height: 0.4rem;
		white-space: nowrap;
		color: #9ec7ff;
		font-size: 0.18rem;
		background: #38f;
		li {
			display: inline-block;
			padding: 0 0.06rem;
			cursor: pointer;
			&.active {
				color: #fff;
			}
		}
	}
</style>