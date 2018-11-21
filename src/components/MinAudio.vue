<template>
	<div>
		<audio ref="audio" 
			@ended="ended" 
			:src="currentSong.playUrl"
			@error="error" 
			@canplay="canplay" 
			@timeupdate='timeUpDateSliders'></audio>
		<div class=""></div>
		<div class="min-img">
			<img :class="iconRun" :src="currentSong.img" />
		</div>
		<div class="min-content">
			<div class="min-sliders">
				<el-slider class='min-slider' @change='timeUpDateChange' v-model="value1"></el-slider>
			</div>
			<div class="min-detail">
				<div class="min-names">
					<div class="ellipsis">{{currentSong.songName}}</div>
					<div>{{currentSong.authorName}}</div>
				</div>
				<div class="min-control">
					<i class="iconfont icon-diyiyeshouyeshangyishou" @click="playPrev"></i>
					<i :class="['iconfont fz15', songPlay?'icon-ai06':'icon-bofang']" @click="pausePlay"></i>
					<i class="iconfont icon-zuihouyiyemoyexiayishou" @click="playNext"></i>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from "vuex"
	import { mapMutations } from "vuex"
	export default {
		data() {
			return {
				value1: 0,
				songDetail: {}
			}
		},
		created() {
			this.songDetail = this.currentSong;
		},
		methods: {
			timeUpDateSliders(e) {
				this.currentTime = e.target.currentTime;
				this.value1 = parseFloat((this.currentTime / this.duration * 100).toFixed(2));
			},
			canplay() {
				this.duration = this.$refs.audio.duration;
				if(!this.songPlay){
					return false;
				}
				this.play();
			},
			pausePlay(){
				this.setSongPlay(!this.songPlay);
					
			},
			play(){
				this.$refs.audio.play();
			},
			error(){
			},
			pause(){
				this.$refs.audio.pause();
			},
			playReLoad(){
				this.$refs.audio.currentTime=0;
				this.setSongPlay(true);
			},
		
			ended(){
				this.playNext();
			},
			playPrev(){
				//单曲循环或者是播放列表只有一个数据的时候
				if(this.currentSongList.length==1||this.playMode==2){
					this.playReLoad();
					return;
				}
				let _index;
				this.currentSongList.forEach((value,index)=>{
				if(value.songName==this.currentSong.songName){
						_index=index
					}
				})
				if(_index==0){
					_index=this.currentSongList.length-1;
				}else{
					_index=_index-1;
				}
				this.setCurrentSong(this.currentSongList[_index]);
			},
			playNext(){
				//单曲循环或者是播放列表只有一个数据的时候
				if(this.currentSongList.length==1||this.playMode==2){
					this.playReLoad();
					return;
				}
				let _index;
				this.currentSongList.forEach((value,index)=>{
					if(value.songName==this.currentSong.songName){
						_index=index
					}
				})
				if(_index==this.currentSongList.length-1){
					_index=0;
				}else{
					_index=_index+1;
				}
				this.setCurrentSong(this.currentSongList[_index]);
			},
			timeUpDateChange(percent){
				this.$refs.audio.currentTime=percent/100*this.duration;
			},
			...mapMutations({
				setSongPlay:"songPlay",
				setCurrentSong:"currentSong",
				setSongList:"setSongList"
			})
		},
		computed: {
			iconRun(){
				return this.songPlay?'active':""
			},
			...mapGetters([
				"currentSong",
				"songPlay",
				"songList",
				"playMode",
				"currentSongList"
			])
		},
		watch: {
			currentSong(newval) { 
				this.songDetail = newval;
				this.value1 = 0;
				this.setSongPlay(true);
				this.setSongList(newval);
			},
			songPlay(newval){
				this.$nextTick(()=>{
					if(newval){
						this.play();
					}else{
						this.pause();
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.min-img {
		width: 0.6rem;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 0.4rem;
			height: 0.4rem;
			border-radius: 50%;
			&.active{
				animation: circleRun 6s linear infinite;
			}
		}
	}
	
	.min-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		.min-sliders {
			padding: 0 0.1rem;
			/deep/ .el-slider__runway {
				margin: 0.1rem 0;
			}
			/deep/ .el-slider__button {
				height: 0.1rem;
				width: 0.1rem;
			}
		}
		.min-detail {
			display: flex;
			flex-direction: row;
			.min-names {
				flex: 1;
				overflow: hidden;
				display: flex;
				flex-direction: column;
			}
			.min-control {
				display: flex;
				width: 1.2rem;
				align-items: center;
				.iconfont {
					font-size: 0.36rem;
				}
			}
		}
	}
	
	.ellipsis {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	@keyframes circleRun {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>