<template>
	<div>
		<back>
			<div>{{title}}</div>
		</back>
		<bscroll-list :loaded=loaded class="m-repple" @listRefresh='listRefresh' @listLoad="listLoad">
			<music-lists :songLists="songList" ></music-lists>
		</bscroll-list>
	</div>
</template>

<script>
	import Back from "components/Back"
	import BscrollList from 'components/BscrollList'
	import MusicLists from 'components/MusicLists'
	import axios from 'axios'
	
	export default {
		data() {
			return {
				title: "",
				songList: {},
				loaded:true
			}
		},
		mounted() {
			this.title = this.$route.query.name;
			this.getList();
		},
		methods: {
			getList() { //获取最新数据函数
				axios.get(this.GLOBAL.IP + '/songList.json').then(this.setList);
			},
			setList(res) {
				this.songList = res.data.data;
				this.$nextTick(() => {
					this.loaded = !this.loaded; //为了触发滚动的better-scroll插件重置
				})
			},
			listRefresh() { //上拉刷新
				this.getList();
			},
			listLoad() { //下拉加载
				axios.get(this.GLOBAL.IP + '/songList.json').then(this.getListMore);
			},
			getListMore(res) {
				this.songList = this.songList.concat(res.data.data);
				this.$nextTick(() => {
					this.loaded = !this.loaded; //为了触发滚动的better-scroll插件重置
				})

			},
			choose(item) {
				this.$router.go(-1);
			}
		},
		components: {
			Back,
			MusicLists,
			BscrollList
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