<template>
	<div ref='repple' class="scroll">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	//滚动的简单组件封装，复杂的暂不考虑
	import Bscroll from 'better-scroll'
	export default {
		props: {
			probeType: {
				type: Number,
				default: 1
			},
			click: {
				type: Boolean,
				default: true
			},
			listenScroll: {
				type: Boolean,
				default: false
			},
			data: {},
			pullup: {
				type: Boolean,
				default: false
			},
			beforeScroll: {
				type: Boolean,
				default: false
			},
			bounce:{
				type: Boolean,
				default: true
			}
		},
		mounted() {
			setTimeout(() => {
				this._initScroll()
			}, 20)
		},
		methods: {
			_initScroll() {
				if(!this.$refs.repple) {
					return
				}
				this.scroll = new Bscroll(this.$refs.repple, {
					probeType: this.probeType,
					click: this.click,
					bounce:this.bounce
				})

				if(this.listenScroll) {
					let me = this
					this.scroll.on('scroll', (pos) => {
						me.$emit('scroll', pos)
					})
				}

				if(this.pullup) {
					this.scroll.on('scrollEnd', () => {
						if(this.scroll.y <= (this.scroll.maxScrollY + 50)) {
							this.$emit('scrollToEnd')
						}
					})
				}

				if(this.beforeScroll) {
					this.scroll.on('beforeScrollStart', () => {
						this.$emit('beforeScroll')
					})
				}
			},
			disable() {
				this.scroll && this.scroll.disable()
			},
			enable() {
				this.scroll && this.scroll.enable()
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			},
			scrollTo() {
				this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
			},
			scrollToElement() {
				this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
			}
		},
		watch: {
			data() {
				this.$nextTick(()=>{
					this.refresh()	
				})	
			}
		}
	}
</script>

<style lang="less" scoped>
	.scroll {
		overflow: hidden;
	}
</style>