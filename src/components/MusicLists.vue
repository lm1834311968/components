<template>
	<ul class="items">
		<li  v-for="(item,index) in songLists" :key="index">
			<div class="item-icon"@click="changeList(item)">
				<i :class="plusMinus?'el-icon-plus':'el-icon-minus'"></i>
			</div>
			<div class="item-img">
				<img v-lazy="item.img" :key="item.img"/>
			</div>
			<div class="item-content" @click="choose(item)">
				<div class="song-title ellipsis">{{item.songName}}</div>
				<div class="song-author">{{item.authorName}}</div>
				<div class="song-collect">
					<i class="el-icon-star-on"></i>
					<span>{{item.timelength}}</span>
				</div>
			</div>
			<div class="item-more">
				<i class="el-icon-more"></i>
				<div>8分钟前</div>
			</div>
		</li>
	</ul>
</template>

<script>
	import { mapMutations } from 'vuex'
	import { mapGetters } from 'vuex'
	export default {
		props: {
			songLists: {},
			plusMinus:{
				type:Boolean,
				default:true
			},
			code:{
				type:String,
				default:''
			}
		},
		methods: {
			choose(songDetail) {
				//判断当前歌曲是否为此首歌
				this.addSongList(songDetail);
				this.$emit('choose', songDetail)
			},
			addSongList(songDetail){
				if(songDetail.songName == this.currentSong.songName) {
					let songP = !this.songPlay;
					this.setSongPlay(songP);
				} else {
					this.setCurrentSong(songDetail);
					this.currentSongList(this.songLists);
				}
			},
			addfavoriteList(songDetail){
				this.setFavoriteList(songDetail);
				this.messages("添加到我的歌单");
			},
			changeList(songDetail){
				if(this.plusMinus){
					this.addfavoriteList(songDetail);
				}else{
					if(this.code=="music-song"){
						this.removeSongList(songDetail);
					}else if(this.code=="music-mysong"){
						this.removeFavoriteList(songDetail);
					}else if(this.code=="music-love"){
						this.removeCurrentSongList(songDetail);
					}
				}
			},
		   messages(messaged) {
			 this.$notify.success({
			        title: '',
			        message: messaged+'成功',
			        showClose: false
		        });
	      	},
			...mapMutations({
				removeSongList:"removeSongList",
				setCurrentSong: "currentSong",
				setSongPlay: "songPlay",
				setFavoriteList: "setFavoriteList",
				removeFavoriteList:"removeFavoriteList"	,
				currentSongList:"currentSongList",
				removeCurrentSongList:"removeCurrentSongList",
				setCurrentSongList:"setCurrentSongList"
			})
		},
		computed: {
			...mapGetters([
				"songList",
				"favoriteList",
				"songPlay",
				"currentSong",
				"favoriteList"
			])
		}
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