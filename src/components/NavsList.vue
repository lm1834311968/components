<template>
	<bscroll-list :loaded=loaded  class="m-repple"  @listRefresh='listRefresh' @listLoad="listLoad">
		<ul class="m-list" slot="list">
			<li v-for="(item,index) in subList" :key='index' @click="articleDetail(item.articleId)">
				<navs-list-image :subItem="item"></navs-list-image>
			</li>
		</ul>
	</bscroll-list>
</template>

<script>
	import NavsListImage from "components/NavsListImage"
	import BscrollList from "components/BscrollList"
	import axios from 'axios'
	import { mapMutations } from 'vuex'
//	import NavsListImageThree from "components/NavsListImageThree"
	export default{
		data(){
			return {
				subList:[],
				loaded:true
			}
		},
		mounted(){
			this.getList();
		},
		methods:{
			getList(){//获取最新数据函数
				axios.get(this.GLOBAL.IP+'/recommendList.json').then(this.setList);
			},
			setList(res){
				this.subList=res.data.list;
				this.$nextTick(()=>{
					this.loaded=!this.loaded;//为了触发滚动的better-scroll插件重置
				})
			},
			listRefresh(){//上拉刷新
				this.getList();
			},
			listLoad(){//下拉加载
				axios.get(this.GLOBAL.IP+'/recommendList.json').then(this.getListMore);
			},
			getListMore(res){
				this.subList=this.subList.concat(res.data.list);
				this.$nextTick(()=>{
					this.loaded=!this.loaded;//为了触发滚动的better-scroll插件重置
				})
				
			},
			articleDetail(articleId){
				this.setPageRouter(true);
				this.$router.push({name:"PageDetail", params: { "articleId": articleId }});
			},
			...mapMutations({
				setPageRouter:"pageRouter"
			})
		},
		components:{
			NavsListImage,
			BscrollList
//			NavsListImageThree
		}
	}
</script>

<style lang="less" scoped>
.m-repple{
	height: 100%;
	padding:0 0.06rem ;
}
.m-list{
	padding-bottom: 0.1rem;
	li{
		margin-top: 0.06rem;
		background: #fff;
		box-shadow: 0 0.02rem 0.08rem 0.02rem #ccc;
	}
}
</style>