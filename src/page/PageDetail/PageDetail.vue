<template>
	<div>
		<back>
			<div>互联网</div>
		</back>
		<bscroll class="article-detail has-top" :data="articleContent">
			<div class="detail-content">
				<h4>{{articleContent.title}}</h4>
				<div class="subtitle">
					<span>人民日报</span><span>2小时前</span><span>134(评)</span>
				</div>
				<div v-html="articleContent.content" class="content">
				</div>
			</div>
		</bscroll>
	</div>
</template>

<script>
	import axios from "axios"
	import Bscroll from 'components/Bscroll'
	import Back from "components/Back"
	export default {
		data() {
			return {
				articleContent: {}
			}
		},
		mounted() {
			let articleId = this.$route.params.articleId;
			this.getData(this.articleId);
		},
		methods: {
			getData(articleId) {
				axios.get(this.GLOBAL.IP + '/articleDetail.json').then(this.setData)
			},
			setData(res) {
				this.articleContent = res.data
			}
		},
		components: {
			Bscroll,
			Back
		}
	}
</script>

<style lang="less" scoped>
	.article-detail {
		background: #fff;
		.detail-content {
			padding: 0 0.1rem 0.2rem;
		}
		h4 {
			font-weight: normal;
			font-size: 0.2rem;
			line-height: 0.3rem;
			color: #000;
		}
		.subtitle {
			line-height: 0.3rem;
			color: #999;
			font-size: 0.12rem;
			span {
				padding: 0 0.1rem;
			}
		}
		.content {
			font-size: 0.14rem;
		}
		.content /deep/ img {
			width: 100%;
			height: 2.2rem;
		}
	}
</style>