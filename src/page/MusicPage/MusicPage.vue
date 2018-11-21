<template>
	<div class="music">
		<search @search='searched'></search>
		<div class="sub-title flex-title" ref="flexTitle">{{subTitle}}</div>
		<min-audio class="min-audio"></min-audio>
		<div ref='repple' class="scroll-list">
			<div>
				<carousel class='carousel' :imgList="imgList" :swiperOption="swiperOption"></carousel>
				<sub-navs-icon></sub-navs-icon>
				<div class="sub-title" ref='subTitle'>{{subTitle}}</div>
				<music-lists :songLists="songLists"></music-lists>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Search from 'components/Search'
	import Carousel from 'components/Carousel'
	import SubNavsIcon from 'components/SubNavsIcon'
	import Bscroll from 'better-scroll'
	import MinAudio from 'components/MinAudio'
	import MusicLists from 'components/MusicLists'
	import { mapMutations } from 'vuex'

	export default {
		data() {
			return {
				imgList: [{
						img: "http://imge.kugou.com/mobilebanner/20181029/20181029160154218028.jpg"
					},
					{
						img: "http://imge.kugou.com/mobilebanner/20181028/20181028000512547396.jpg"
					},
					{
						img: "http://imge.kugou.com/mobilebanner/20181028/20181028003447819959.jpg"
					},
					{
						img: "http://imge.kugou.com/mobilebanner/20181022/20181022175954887897.jpg"
					}
				],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true
				},
				subTitle: '推荐好歌',
				songLists: {},
				playSongList: []
			}
		},
		created(){
			if(window.localStorage.getItem("songList")){
				this.songList(JSON.parse(window.localStorage.getItem("songList")));
			}
			if(window.localStorage.getItem("favoriteList")){
				this.favoriteList(JSON.parse(window.localStorage.getItem("favoriteList")));
			}
			if(window.localStorage.getItem("currentSongList")){
				this.currentSongList(JSON.parse(window.localStorage.getItem("currentSongList")));
			}
			if(window.localStorage.getItem("currentSong")){
				this.currentSong(JSON.parse(window.localStorage.getItem("currentSong")));
			}
			
			
		},
		mounted() {
			this.getSong();
		},
		methods: {
			getSong() {
				axios.get(this.GLOBAL.SONGLISTIP).then(this.setSong)
			},
			setSong(res) {
				debugger
				this.songLists = res.data.recordset;
				this.$nextTick(() => {
					this.scroll = new Bscroll(this.$refs.repple, {
						probeType: 3,
						click:true
					});
					this.subTitleTop = this.$refs.subTitle.offsetTop;
					this.scroll.on('scroll', this.scrolled);
				})
			},
			scrolled(pos) {
				if(-pos.y >= this.subTitleTop) {
					this.$refs.flexTitle.style.opacity = 1;
				}
				if(-pos.y < this.subTitleTop) {
					this.$refs.flexTitle.style.opacity = 0;
				}
			},
			searched(){
				this.$router.push({name:"MusicSearch"})
			},
			...mapMutations([
				"songList",
				"favoriteList",
				"currentSongList",
				"currentSong"
			])

		},
		components: {
			Search,
			Carousel,
			SubNavsIcon,
			MinAudio,
			MusicLists
		}
	}
</script>

<style scoped lang="less">
	.scroll-list {
		position: absolute;
		right: 0;
		left: 0;
		top: 0.4rem;
		bottom: 1.3rem;
		overflow: hidden;
	}
	
	.carousel /deep/ img {
		width: 100%;
		height: 1.5rem;
	}
	
	.flex-title {
		position: absolute;
		top: 0.4rem;
		left: 0;
		z-index: 9;
		width: 100%;
		opacity: 0;
	}
	
	.sub-title {
		background: #fff;
		line-height: 0.3rem;
		text-align: center;
		border-bottom: 1px solid #ddd;
		font-size: 0.16rem;
		border-radius: 0.1rem 0.1rem 0 0;
	}
	
	.min-audio {
		height: 0.7rem;
		position: absolute;
		bottom: 0.6rem;
		width: 100%;
		z-index: 9;
		display: flex;
		align-items: center;
		background: #fff;
		border-top: 1px solid #ddd;
	}
</style>