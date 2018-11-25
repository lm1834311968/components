<template>
	<div class="list">
		<sub-navs :subName="subName" :parIndexNow="indexNow" @choose='choose' v-if="subName.length!=0"></sub-navs>
		<div class="wrapper">
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for="(item,index) in subName" :key="index">
					<component :is="HomeList" :type="item.type" v-if="lazyLoaded(index)"></component>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script>
	import SubNavs from 'components/SubNavs'
	import HomeList from 'components/HomeList'
	import axios from 'axios'

	export default {
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: true,
					touchAngle:20,
					on: {
						slideChangeTransitionEnd: this.chooseIndex
					}
				},
				subName: ['推荐','励志','爱情','人生','伤感','英文','唯美'],
				subName: [{
					name:'推荐',
					type:0
				},{
					name:'励志',
					type:8
				},{
					name:'爱情',
					type:9
				},{
					name:'人生',
					type:10
				},{
					name:'伤感',
					type:11
				},{
					name:'英文',
					type:14
				},{
					name:'唯美',
					type:15
				}],
				HomeList: 'home-list',
				indexNow: 0
			}
		},
		mounted() {
			this.mySwiper = this.$refs.mySwiper.swiper;
			this.lazyLoadIndex();
		},
		methods: {
//			getData() {
//				axios.get(this.GLOBAL.IP+'/homeList.json').then(this.setList)
//				//				axios.get('/dist/static/mock/homeList.json').then(this.setList)
//			},
//			setList(res) {
//				let subNameArry = [];
//				res.data.data.datas.forEach((val) => {
//					subNameArry.push(val.name);
//				})
//				this.subName = subNameArry;
//				this.lazyLoadIndex();
//				this.mySwiper = this.$refs.mySwiper.swiper
//			},
			choose(index) {
				this.mySwiper.slideTo(index);
			},
			chooseIndex() {
				this.indexNow = this.mySwiper.activeIndex;
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
				this.subName.forEach((val) => {
					this.indexs.push(false);
				})
			}
		},
		computed: {},
		components: {
			SubNavs,
			HomeList
		}
	}
</script>

<style lang="less" scoped>
	.wrapper {
		position: absolute;
		left: 0;
		right: 0;
		top: 0.4rem;
		bottom: 0.6rem;
		.swiper-container {
			height: 100%;
		}
	}
</style>