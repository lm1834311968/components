<template>
	<div class="search">
		<div class="search-input" @click="searched">
			<div>
				<i class="el-icon-search"></i>
				<span>搜你所爱</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			searched(){
				this.$emit('search')
			}
		}
	}
</script>

<style scoped lang="less">
	.search {
		background: #38f;
		padding: 0.07rem 0;
		.search-input {
			width: 90%;
			margin: 0 auto;
			border-radius: 0.1rem;
			background: #fff;
			text-align: center;
			>div {
				display: inline-block;
				color: #888;
				line-height: 0.26rem;
				font-size: 0.14rem;
				padding: 0 0.06rem;
				span {
					padding: 0 0.04rem;
				}
			}
		}
	}
</style>