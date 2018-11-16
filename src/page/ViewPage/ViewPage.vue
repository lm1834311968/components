<template>
	<div>
		<component v-for="(item,index) in navsList" v-if='lazyLoaded(index)' v-show='index==indexNow' :key="index" :is="item.componentName"></component>
		<navs @changes="changes"></navs>
		<transition name='right-left'>
			<router-view class="detail"/>
		</transition>
	</div>
</template>

<script>
	import Navs from 'components/Navs/Navs'
	import HomePage from 'page/HomePage/HomePage'
	import MusicPage from 'page/MusicPage/MusicPage'

	export default {
		data() {
			return {
				navsList: [{
					componentName: 'home-page'
				}, {
					componentName: 'music-page'
				}],
				indexNow: 1
			}
		},
		created() {
			this.lazyLoadIndex();
		},
		methods: {
			changes(index) {
				this.indexNow = index;
			},
			lazyLoaded(index) {
				if(!this.indexs[index]) {
					if(index == this.indexNow) {
						this.indexs[index] = true;
						return true;
					}
					return false;
				} else {
					return true;
				}
			},
			lazyLoadIndex() {
				this.indexs = [];
				this.navsList.forEach((val) => {
					this.indexs.push(false);
				})
			}
		},
		components: {
			Navs,
			HomePage,
			MusicPage
		}
	}
</script>

<style lang="less" scoped>
	.detail {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 9;
	}
	
	.right-left-enter-active,
	.right-left-leave-active {
		transition: transform .5s;
	}
	
	.right-left-enter,
	.right-left-leave-to {
		transform: translateX(100%);
	}
</style>