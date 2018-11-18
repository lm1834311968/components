<template>
	<div>
		<back>
			<div>{{title}}</div>
		</back>
		<bscroll :data="songList" class="m-repple" >
			<music-lists :songLists="songList" ></music-lists>
		</bscroll>
	</div>
</template>

<script>
	import Back from "components/Back"
	import Bscroll from 'components/Bscroll'
	import MusicLists from 'components/MusicLists'
	import axios from 'axios'
	import { mapGetters } from "vuex"
	
	export default {
		data() {
			return {
				title: "",
				songList: {}
			}
		},
		mounted() {
			this.title = this.$route.query.name;
			debugger
			switch(this.$route.query.code){
				case "music-song":
				this.songList=this.songListed;break;
				default:
				this.getList();
			}
		},
		methods: {
			choose(item) {
				this.$router.go(-1);
			}
		},
		computed:{
			...mapGetters({
				songListed:"songList"
			})
		},
		components: {
			Back,
			MusicLists,
			Bscroll
		}
	}
</script>

<style lang="less" scoped>
.m-repple{
	position: absolute;
	top: 0.4rem;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
}
</style>