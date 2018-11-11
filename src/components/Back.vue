<template>
	<div class="back">
		<div class="icon">
			<div class="el-icon-back" @click="goback"></div>
		</div>
		<div class='content'>
			<slot ></slot>
		</div>
		
	</div>
</template>

<script>
	import { mapMutations } from "vuex"
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			goback() {
//				this.$router.go(-1);
				this.setPageRouter(false);
			},
		...mapMutations({
			setPageRouter:"pageRouter"
		})
		}
	
	}
</script>

<style lang="less" scoped>
.back{
	height: 0.4rem;
	background: #38f;
	display: flex;
	color: #fff;
	font-size: 0.16rem;
	align-items: center;
	.icon{
		width: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.el-icon-back{
		font-size: 0.16rem;
	}
	.content{
		flex: 1;
	}
}
</style>