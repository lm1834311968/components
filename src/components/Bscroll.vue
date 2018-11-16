<template>
	<div ref='repple' class="scroll">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	//滚动的简单组件封装，复杂的暂不考虑
	import Bscroll from 'better-scroll'
	export default {
		props: {
			dataed: {},
			bounce:{
				default:true
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.repple,{bounce:this.bounce,click: true});
		},
		watch: {
			dataed() {
				this.$nextTick(()=>{
					this.scroll.refresh()
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.scroll{
	overflow: hidden;
}
</style>