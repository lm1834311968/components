<template>
	<ul class="history-items">
		<li v-for="(item,index) in dataed" :key="index" class="history-item">
			<div class="icon-history"><span class="iconfont icon-shijian "></span></div>
			<div class="history-content" @click="searched(item)">{{item}}</div>
			<div class="icon-close">
				<i class="el-icon-close" @click='deleted(index)'></i>
			</div>
		</li>
	</ul>
</template>

<script>
	export default{
		data(){
			return {}
		},
		methods:{
			searched(val){
				this.$emit('searched',val);
			},
			deleted(index){
				this.$emit('deleted',index);
			}
		},
		props:{
			dataed:{}
		}
	}
</script>

<style lang="less" scoped>
	.history-items{
		padding: 0.06rem;
	}
	.history-item{
		display: flex;
		align-items: center;
		font-size: 0.14rem;
		line-height: 0.4rem;
		border-bottom: 1px solid #ddd;
		.icon-history{
			width: 0.4rem;
			display: flex;
			justify-content: center;
			
			font-size: 0.16rem;
		}
		.history-content{
			flex: 1;
		}
		.icon-close{
			width: 0.3rem;
			display: flex;
			justify-content: center;

			font-size: 0.16rem;
		}
	}
</style>