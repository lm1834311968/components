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
				loaded:true,
				pageSize:1
			}
		},
		mounted() {
			this.title = this.$route.query.name;
			this.getList();
		},
		methods: {
			getList() { //获取最新数据函数
				axios.get(this.GLOBAL.SONGLISTIP).then(this.setList);
			},
			setList(res) {
				this.songList = res.data.recordset;
				this.$nextTick(() => {
					this.loaded = !this.loaded; //为了触发滚动的better-scroll插件重置
				})
			},
			listRefresh() { //上拉刷新
				this.pageSize=1;
				this.getList();
			},
			listLoad() { //下拉加载
				this.pageSize++;
				axios.get(this.GLOBAL.SONGLISTIP+'?pageSize='+this.pageSize).then(this.getListMore);
			},
			getListMore(res) {
				this.songList = this.songList.concat(res.data.recordset);
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