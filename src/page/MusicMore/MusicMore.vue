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
				pageNum:0
			}
		},
		mounted() {
			this.title = this.$route.query.name;
			this.pageType=this.$route.query.type;
			this.getList();
		},
		methods: {
			getList() { //获取最新数据函数
				this.pageNum=0;
				axios.get(this.GLOBAL.SONGLISTIP+"?pageType="+this.pageType+"&pageNum="+this.pageNum).then(this.setList);
			},
			setList(res) {
				this.songList = res.data.recordset;
				this.pageNum=res.data.recordset[res.data.recordset.length-1].id;
				this.$nextTick(() => {
					this.loaded = !this.loaded; //为了触发滚动的better-scroll插件重置
				})
			},
			listRefresh() { //上拉刷新
				this.pageNum=0;
				this.getList();
			},
			listLoad() { //下拉加载
				axios.get(this.GLOBAL.SONGLISTIP+'?pageNum='+this.pageNum+"&pageType="+this.pageType).then(this.getListMore);
			},
			getListMore(res) {
				this.pageNum=res.data.recordset[res.data.recordset.length-1].id;
				this.songList = this.songList.concat(res.data.recordset);
				debugger
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