<template>
	<div class="searched">
		<back>
			<div class="search-content el-icon-search">
				<input type="text" placeholder="搜你所爱" v-model="searchValue" @keyup="searched" ref="searchValue"/>
				<div class="search-icon" @click="searched">搜索</div>
			</div>
		</back>
		<div class="hot-title">热门搜索</div>
		<ul class="hot-list clear">
			<li v-for="(item,index) in hotSearch" :key="index" @click='fastSearched(item)'>{{item}}</li>
		</ul>
		<histort-list :dataed='historyList' @searched="fastSearched" @deleted="deleted"></histort-list>
		<bscroll :dataed="searchResult" :bounce="false" class="search-result" v-show="listShow" >
			<music-lists :songLists="searchResult" @choose="choose"></music-lists>
		</bscroll>
	</div>
</template>

<script>
	import Back from "components/Back"
	import Bscroll from "components/Bscroll"
	import HistortList from "components/HistortList"
	import MusicLists from "components/MusicLists"
	import axios from "axios"
	import { mapMutations } from "vuex"

	export default {
		data() {
			return {
				hotSearch:["亲爱的","断点","七里香","勇气","花无缺","年少有为"],
				historyList:["亲爱的","断点"],
				searchResult:[],
				searchValue:''
			}
		},
		created(){
			let localHostory=window.localStorage.getItem("historyList")
			if(localHostory){
				this.historyList=JSON.parse(localHostory);
			}
		},
		methods:{
			searched(){
				//节流函数
				if(this.setTime){
					clearTimeout(this.setTime);
				}
				let that=this;
				this.setTime=setTimeout(()=>{
					this.getList(that.searchValue);
				},200);
			},
			getList(val){
				axios.get(this.GLOBAL.IP + "/songList.json?name="+val).then(this.setList)
			},
			setList(res){
				this.searchResult=res.data.data;
			},
			choose(items){
				if(this.historyList.length>5){
					this.historyList.pop();
				}
				this.historyList.unshift(this.searchValue)
				window.localStorage.setItem("historyList",JSON.stringify(this.historyList))
				this.setPageRouter(false);
			},
			fastSearched(val){
				this.searchValue=val;
				this.getList(val);
			},
			deleted(index){
				this.historyList.splice(index,1);
				window.localStorage.setItem("historyList",JSON.stringify(this.historyList))
			},
			...mapMutations({
				setPageRouter:"pageRouter"
			})
		},
		computed:{
			listShow(){
				if(this.searchValue){
					return true;		
				}else{
					return false;
				}
			}
		},
		components: {
			Back,
			Bscroll,
			HistortList,
			MusicLists
		}
	}
</script>

<style lang="less" scoped>
	.searched {
		background: #fff;
		.search-content{
			align-items: center;
			display:flex;
			position: relative;
			&.el-icon-search:before{
				position: absolute;
				left: 0.06rem;
				color: #888;
			}
			input {
				flex:1;
				border-radius: 0.1rem;
				border:none;
				font-size: 0.14rem;
				line-height: 0.26rem;
				background: #fff;
				padding: 0 0.14rem 0 0.3rem;
			}
			.search-icon{
				width: 0.5rem;
				text-align: center;
			}
		}
		.hot-title{
			line-height: 0.2rem;
			padding-left: 0.1rem;
			padding-top: 0.1rem;
			font-size: 0.16rem;
			color: #888;
		}
		.hot-list{
			li{
				float: left;
				border:1px solid #38f;
				color: #38f;
				border-radius: 0.6rem;
				margin: 0.06rem;
				padding: 0.04rem 0.1rem;
			}
		}
	}
.search-result{
	position: absolute;
	top: 0.4rem;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>