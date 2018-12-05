<template>
	<div ref='repple' class="bscroll">
		<div>
			<div :class="loadActive?'load-fresh active':'load-fresh '"><i class="iconfont icon-jiazai"></i></div>
			<slot></slot>
			<div :class="loadMoreActive?'load-more active':'load-more'"><i class="iconfont icon-jiazai"></i></div>
		</div>
	</div>
</template>

<script>
	//滚动轮播的上拉刷新和下拉加载更多，对外触发几个方法，对于watch有些直接监控data也可以，看个人
	//网上也有直接写好的better-scroll的方法可以直接使用，这个是我的大概思路写的，可能解决方法不是很完美
	import Bscroll from 'better-scroll'
	export default {
		props: {
			loaded: false,
			bounce:{
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				loadActive: false,
				loadMoreActive: false
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.repple,{click: true});
			this.scroll.on('touchEnd', this.tocunEnd);
		},
		methods: {
			tocunEnd(pos) {
				if(pos.y > 50) {
					this.loadActive = true;
					this.$emit('listRefresh'); /*触发上拉刷新*/
				}
				if(pos.y < this.scroll.maxScrollY + 100) {
					this.loadMoreActive = true;
					this.$emit('listLoad'); /*触发下拉加载*/
				}
			}
		},
		watch: {
			loaded() {
				this.scroll.refresh();
				this.loadActive = false; /*这是父页面给本页面的上拉提示符*/
				this.loadMoreActive = false; /*这是父页面给本页面的下拉加载更多提示符*/
			}
		}
	}
</script>

<style lang="less" scoped>
	.bscroll {
		overflow: hidden;
	}
	
	.load {
		display: flex;
		justify-content: center;
		position: absolute;
		width: 100%;
		display: none;
		left: 0;
	}
	
	.load-fresh {
		.load;
		top: 0;
		&.active {
			display: flex;
		}
	}
	
	.load-more {
		.load;
		bottom: 0;
		&.active {
			display: flex;
		}
	}
	
	.icon-jiazai {
		animation: cricle 2s linear infinite;
		text-align: center;
		font-size: 0.4rem;
		padding: 0.06rem 0;
		color: #38f;
		display: inline-block;
	}
	
	@keyframes cricle {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>