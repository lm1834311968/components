<template>
	<div>
		<back>
			<div>{{title}}</div>
		</back>
		<bscroll :data="songList" class="m-repple" >
			<music-lists :songLists="songList" :plusMinus='plusMinus' :code="code"></music-lists>
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
		created(){
			this.plusMinus=Boolean(this.$route.query.plusMinus);
			this.code=this.$route.query.code;
		},
		mounted() {
			this.title = this.$route.query.name;
			switch(this.code){
				case "music-song":
				this.songList=this.songListed;break;
				case "music-mysong":
				this.songList=this.favoriteList;break;
				default:
				this.getList();
			}
		},
		methods: {
			choose(item) {
				this.$router.go(-1);
			},
			getList(val){
				axios.post(this.GLOBAL.SONGLISTIP).then(this.setList)
			},
			setList(res){
				this.songList=res.data;
			},
		},
		computed:{
			...mapGetters({
				songListed:"songList",
				favoriteList:"favoriteList"
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