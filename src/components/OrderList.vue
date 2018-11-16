<template>
	<div>
		<div ref="repple" class='singers'>
			<div>
				<ul class="singer-classifys">
					<li v-for="items in dataed" :ref="items.title">
						<div class="singer-classifys-name">{{items.title}}</div>
						<ul class="singer-classify">
							<li v-for="(item,index) in items.items" :ref="'name'+index" class="singer-name">{{item.name}}</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div class="alphabets">
			<ul class="alphabet">
				<li v-for="(items,index) in dataed"  
					@touchstart.prevent="touchStart" 
					@touchmove.prevent="touchMove" 
					@touchend="touchEnd" 
					:key="index" 
					@click='clickItem(items.title)' 
					:ref="'alphabet'+index"
					:class="alphabetData==items.title?'active':''"
					 >{{items.title}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		props: {
			dataed: {}

		},
		data() {
			return {
				alphabetData: 'A',
				scrollY: [],
				start: false
			}
		},
		methods: {
			touchStart(e) {
				this.start = true;
			},
			touchMove(e) {
				if(this.start) {
					let that = this;
					if(this.time) {
						clearTimeout(this.time);
					}
					this.time = setTimeout(() => {
						that.scrollY[1] = e.touches[0].clientY;
						let alphabetNow = Math.floor((that.scrollY[1] - that.scrollY[0] - 40) / that.alphabetHeight);
						if(alphabetNow>0&&alphabetNow<that.getLetter.length){
							that.alphabetData = that.getLetter[alphabetNow];
						}
						
					}, 16)
				}

			},
			touchEnd(e) {
				this.start = false;
			},
			clickItem(title){
				debugger
				this.alphabetData=title;
			}
		},
		computed: {
			getLetter() {
				console.log(456)
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
		updated() {
			this.$nextTick(() => {
				if(this.dataed.length != 0) {
					this.scroll = new Bscroll(this.$refs.repple, {
						click: true
					});
					this.scrollY[0] = this.$refs.alphabet0[0].offsetTop;
					this.alphabetHeight = this.$refs.alphabet0[0].offsetHeight;
				}
			})
		},
		watch: {
			alphabetData(newval) {
				const element = this.$refs[newval][0];
				this.scroll.scrollToElement(element);
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
	
	.singer-classifys {
		.singer-classifys-name {
			font-size: 0.2rem;
			line-height: 0.3rem;
			background: #f2f2f2;
			padding: 0 0.2rem;
		}
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
		font-size: 0.14rem;
		.alphabet {
			li {
				padding: 0.02rem 0.06rem;
			}
			.active{
				color: #38f;
			}
		}
	}
</style>