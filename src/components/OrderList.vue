<template>
	<div ref='singerContent'>
		<div class="singer-classifys-name top-alphabet">{{alphabetDataActive}}</div>
		<Bscroll 
			ref="bscroll" 
			class='singers' 
			:data="dataed"
			:probeType="3" 
			:pullup="true"
			:listenScroll="true" 
			:bounce="false"
			@scroll="scroll"
			v-if="dataed.length">
				<ul class="singer-classifys">
					<li v-for="items in dataed" :ref="items.title">
						<div class="singer-classifys-name">{{items.title}}</div>
						<ul class="singer-classify">
							<li v-for="(item,index) in items.items" :ref="'name'+index" class="singer-name">{{item.name}}</li>
						</ul>
					</li>
				</ul>
		</Bscroll>
		<div class="alphabets">
			<ul class="alphabet">
				<li v-for="(items,index) in dataed" 
					@touchstart.stop="touchStart" 
					@touchmove.stop="touchMove" 
					@touchend="touchEnd" 
					:key="index" 
					@click='clickItem(items.title)' 
					:ref="'alphabet'+index" 
					:class="alphabetDataActive==items.title?'active':''">{{items.title}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'components/Bscroll'
	export default {
		props: {
			dataed: {}

		},
		data() {
			return {
				alphabetData: 'A',
				alphabetDataActive:'A'
//				scrollY: [],
//				start: false
			}
		},
		methods: {
			touchStart(e) {
				this.start = true;//是否在本字母表上开始点击
			},
			touchMove(e) {
				if(this.start) {
					let that = this;
					if(this.time) {
						clearTimeout(this.time);
					}
					this.time = setTimeout(() => {
						that.scrollY = e.touches[0].clientY;
						debugger
						let alphabetNow = Math.floor((that.scrollY - that.fristAlphabetTop - that.$refs.singerContent.offsetTop) / that.alphabetHeight);
						if(alphabetNow >= 0 && alphabetNow < that.getLetter.length) {
							that.alphabetData = that.getLetter[alphabetNow];
							that.alphabetDataActive = that.getLetter[alphabetNow];
						}
					}, 16)
				}
			},
			touchEnd(e) {
				this.start = false;
			},
			clickItem(title) {
				this.alphabetData = title;
				this.alphabetDataActive = title;
			},
			scroll(pos){
				debugger
				console.log(pos.y)
				if(-pos.y<0){      //第一个的时候
					this.alphabetDataActive=this.getLetter[0];
					return;
				}
				for(let i=0;i<this.getLetter.length;i++){//中间的时候
					if(-pos.y<this.$refs[this.getLetter[i]][0].offsetTop){
						this.alphabetDataActive=this.getLetter[i-1];
						return;
					}
				}
				if(-pos.y>this.$refs[this.getLetter[this.getLetter.length-1]][0].offsetTop){//最后一个的时候
					this.alphabetDataActive=this.getLetter[this.getLetter.length-1];
				}
			}
		},
		computed: {
			getLetter() {
				let _list = [];
				this.dataed.forEach((val) => {
					_list.push(val.title)
				})
				return _list;
			}
		},
		components: {
			Bscroll
		},
		watch: {
			alphabetData(newval) {
				const element = this.$refs[newval][0];
				this.$refs.bscroll.scrollToElement(element);
			},
			dataed(val) {
				this.$nextTick(() => {
					if(this.dataed.length != 0) {
						debugger
						this.fristAlphabetTop= this.$refs.alphabet0[0].offsetTop;
						this.alphabetHeight = this.$refs.alphabet0[0].offsetHeight;
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.singers {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	.top-alphabet{
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 2;
	}
	.singer-classifys-name {
		font-size: 0.2rem;
		line-height: 0.3rem;
		background: #f2f2f2;
		padding: 0 0.2rem;
	}
	.singer-classifys {
		.singer-name {
			line-height: 0.4rem;
			font-size: 0.16rem;
			border-bottom: 1px dashed #ddd;
			padding: 0 0.1rem;
		}
	}
	
	.alphabets {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		text-align: center;
		font-size: 0.12rem;
		line-height: 0.16rem;
		.alphabet {
			li {
				padding: 0 0.1rem;
				z-index: 10;
			}
			.active {
				color: #38f;
			}
		}
	}
</style>