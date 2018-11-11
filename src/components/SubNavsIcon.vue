<template>
	<div>
		<ul>
			<li v-for="(item,index) in navsList" :class="['item',index==nowIndex?'active':'']" :key="item.icon">
				<div :class="[item.icon,'iconfont']" :style="{background:item.bgcolor}"></div>
				<div class="title">{{item.name}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navsList: [{
					icon: "icon-yinyue",
					name: '乐库',
					bgcolor: "#fea736"
				}, {
					icon: "icon-vynil",
					name: '歌单',
					bgcolor: "#2acb9f"
				}, {
					icon: "icon-yinle101",
					name: '电台',
					bgcolor: "#01a1ff"
				}, {
					icon: "icon-cainixihuan",
					name: '猜你喜欢',
					bgcolor: "#e86ee7"
				}, {
					icon: "icon-tuijian",
					name: '每日推荐',
					bgcolor: "#ff6364"
				}, {
					icon: "icon-gengduo",
					name: '更多',
					bgcolor: "#906dc9"
				}],
				nowIndex: 0
			}
		}
	}
</script>

<style lang="less" scoped>
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background: #fff;
		margin-bottom: 0.06rem;
		border-radius: 0.1rem 0.1rem 0 0;
		
		li {
			width: 33.3%;
			display: flex;
			padding-top: 0.06rem;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.iconfont {
				height: 0.5rem;
				width: 0.5rem;
				font-size: 0.2rem;
				line-height: 0.5rem;
				text-align: center;
				background: #38f;
				border-radius: 50%;
				color: #fff;
			}
			.title {
				color: #333;
				line-height: 0.3rem;
			}
			&.active {
				.iconfont {
					animation: run 2s linear infinite;
				}
			}
		}
	}
	
	@keyframes run {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>