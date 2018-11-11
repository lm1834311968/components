<template>
	<nav>
		<ul>
			<li @click="pageshow(0)">
				<i class="el-icon-tickets"></i>
				<div>首页</div>
			</li>
			<li  @click="pageshow(1)">
				<i class="el-icon-service"></i>
				<div>音乐</div>
			</li>
			<li>
				<i class="el-icon-circle-plus add"></i>
			</li>
			<li @click="pageshow(2)">
				<i class="el-icon-bell"></i>
				<div>品牌</div>
			</li>
			<li @click="pageshow(3)">
				<i class="el-icon-menu"></i>
				<div>个人</div>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			pageshow(index) {
				this.$emit('changes',index)
			}
		}
	};
</script>

<style lang="less" scoped>
	nav {
		position: fixed;
		width: 100%;
		bottom: 0;
		font-size: 0.13rem;
	 	line-height: 20px;
		color: #959aa0;
		background: #fff;
		padding: 0.06rem 0;
		>ul {
			display: flex;
			>li {
				flex: 1;
				text-align: center;
				>i {
					font-size: 0.21rem;
				}
				.add {
					font-size: 0.37rem;
					margin-top: 0.03rem;
					position: relative;
					ul {
						position: absolute;
						transform: scale(0);
						transition: all 0.4s cubic-bezier(0.4, 0.46, 0.3, 1.31);
						left: 0.18rem;
						top: 0.13rem;
						&.transition {
							transform: scale(1);
						}
						li {
							position: absolute;
							background: #fff;
							height: 0.5rem;
							width: 0.5rem;
							line-height: 0.5rem;
							text-align: center;
							font-size: 0.14rem;
							border-radius: 50%;
						}
					}
				}
				&.router-link-exact-active {
					color: #ebba49;
				}
			}
		}
	}
</style>