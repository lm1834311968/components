<template>
	<ul class="items">
		<li v-for="item in songLists">
			<div class="item-icon">
				<i class="el-icon-plus"></i>
			</div>
			<div class="item-img">
				<img v-lazy="item.album.picUrl" />
			</div>
			<div class="item-content" @click="choose(item.album)">
				<div class="song-title ellipsis">{{item.album.name}}</div>
				<div class="song-author">{{item.artists[0].name}}</div>
				<div class="song-collect">
					<i class="el-icon-star-on"></i>
					<span>{{item.duration}}</span>
				</div>
			</div>
			<div class="item-more">
				<i class="el-icon-more"></i>
				<div>{{item.fee}}分钟前</div>
			</div>
		</li>
	</ul>
</template>

<script>
	import { mapMutations } from 'vuex'
	import { mapGetters } from 'vuex'
	export default {
		props: {
			songLists: {}
		},
		mounted() {
			this.playSongList = this.songList;
		},
		methods: {
			choose(songDetail) {
				if(songDetail.id==this.currentSong.id){
					this.setSongPlay(!this.songPlay);
				}
				this.setCurrentSong(songDetail);
				let canSet = true;
				this.songList.forEach((value) => {
					if(value.id == songDetail.id) {
						canSet = false;
					}
				})
				if(canSet) {
					this.playSongList.push(songDetail);
					this.setSongList(this.playSongList);
				}
				this.$emit('choose',songDetail)
			},
			...mapMutations({
				setSongList: "songList",
				setFavoriteList: "favoriteList",
				setCurrentSong: "currentSong",
				setSongPlay:"songPlay"
			})
		},
		computed: {
			...mapGetters([
				"songList",
				"favoriteList",
				"songPlay",
				"currentSong"
			])
		},
	}
</script>

<style lang="less" scoped>
	.items {
		background: #fff;
		li {
			display: flex;
			align-items: center;
			padding: 0.06rem 0;
			border-bottom: 1px solid #ddd;
			justify-content: center;
			.item-icon {
				width: 0.4rem;
				display: flex;
				justify-content: center;
				i {
					padding: 0.02rem;
					border: 1px solid #999;
					font-size: 0.1rem;
					color: #999;
					border-radius: 20%;
				}
			}
			.item-img {
				width: 0.6rem;
			}
			img {
				width: 100%;
			}
			.item-content {
				flex: 1;
				overflow: hidden;
				padding: 0 0.06rem;
				display: flex;
				flex-direction: column;
				.song-title {
					font-size: 0.16rem;
				}
				.song-author {
					color: #999;
					font-size: 0.12rem;
					line-height: 0.2rem;
				}
				.song-collect {
					color: #999;
					font-size: 0.12rem;
				}
			}
			.item-more {
				width: 0.6rem;
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #999;
				font-size: 0.12rem;
				line-height: 0.2rem;
			}
		}
	}
	

</style>