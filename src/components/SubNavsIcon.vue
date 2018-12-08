<template>
	<div>
		<ul>
			<li v-for="(item,index) in navsList" :class="['item',index==nowIndex?'active':'']" :key="item.icon" @click="choose(item,index)">
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
					name: '网络红歌',
					code: 'music-all',
					bgcolor: "#fea736",
					type:"网络红歌"
				},{
					icon: "icon-tuijian",
					name: 'DJ热歌榜',
					code: 'music-recommend',
					bgcolor: "#ff6364",
					type:"DJ热歌榜"
				}, {
					icon: "icon-dianying",
					name: '电影热歌',
					code: 'music-dianying',
					bgcolor: "#56c164",
					type:"电影热歌榜"
				},  {
					icon: "icon-yingshi-yuanwenjian",
					name: '影视金曲',
					code: 'music-yingshi',
					bgcolor: "#d46543",
					type:"影视金曲榜"
				}, {
					icon: "icon-yinle-leqi-music-instrume",
					name: '纯音乐',
					code: 'music-yinle',
					bgcolor: "#9c287d",
					type:"纯音乐榜"
				}, {
					icon: "icon-gengduo",
					name: '歌手',
					code: 'music-singer',
					bgcolor: "#906dc9"
				},{
					icon: "icon-cainixihuan",
					name: '我的歌单',
					code: 'music-mysong',
					bgcolor: "#01a1ff"
				},{
					icon: "icon-yinle101",
					name: '当前歌单',
					code: 'music-love',
					bgcolor: "#e86ee7"
				},{
					icon: "icon-vynil",
					name: '历史歌单',
					code: 'music-song',
					bgcolor: "#2acb9f"
				} ],
				nowIndex: 0
			}
		},
		methods:{
			choose(item,index){
				this.nowIndex=index;
				this.$router.push({name:"MusicMore",query:item})
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