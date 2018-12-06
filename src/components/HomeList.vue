<template>
	<bscroll-list :loaded="loaded"  class="m-repple"  @listRefresh='listRefresh' @listLoad="listLoad">
		<ul class="m-list" >
			<li v-for="(item,index) in subList" :key='index' >
				<article-item :subItem="item"></article-item >
			</li>
		</ul>
	</bscroll-list>
</template>

<script>
	import ArticleItem from "components/ArticleItem"
	import BscrollList from "components/BscrollList"
	import axios from 'axios'
	export default{
		props:{
			type:''
		},
		data(){                                                                                                                      
			return {
				subList:[],
				loaded:true,
				pageNum:false,
				page:1
			}
		},
		created(){
			if(this.type==0){
				this.url=this.GLOBAL.PHRASEIP+"/getNewTheme"
			}else{
				this.url=this.GLOBAL.PHRASEIP+"/getThemeByType"
			}
		},
		mounted(){
			this.getList();
		},
		methods:{
			getList(){//获取最新数据函数
				if(this.pageNum){
					this.page=Math.floor(Math.random()*this.pageNum+1);
				}else{
					this.page=Math.floor(Math.random()*60+1);
				}
				axios.get(this.url,{
						params:{
						typeId:this.type,
						page:this.page,
						pageSize:15
					}
				}).then(this.setList);
			},
			setList(res){
				if(this.type==0){
					this.subList=res.data.data;
				}else{
					this.subList=res.data.data.result;
					this.pageNum=res.data.data.totalItems
				}
				debugger
				this.$nextTick(()=>{
					this.loaded=!this.loaded;//为了触发滚动的better-scroll插件重置
				})
			},
			listRefresh(){//上拉刷新
				this.getList();
			},
			listLoad(){//下拉加载
					this.page=Math.floor(Math.random()*this.pageNum+1);
					axios.get(this.url,{
						params:{
						typeId:this.type,
						page:this.page,
						pageSize:15
					}
				}).then(this.getListMore);
			},
			getListMore(res){
				let _data;
				if(this.type==0){
					_data=res.data.data;
				}else{
					_data=res.data.data.result;
				}
				this.subList=this.subList.concat(_data);
				this.$nextTick(()=>{
					this.loaded=!this.loaded;//为了触发滚动的better-scroll插件重置
				})
				
			},
			articleDetail(articleId){
				this.$router.push({name:"PageDetail", params: { "articleId": articleId }});
			}
		},
		components:{
			BscrollList,
			ArticleItem

		}
	}
</script>

<style lang="less" scoped>
.m-repple{
	height: 100%;
	padding:0 0.06rem;
	width: 100%;
	box-sizing: border-box;
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