<template>
	<div class="center-bg login">
		<form>
			<h3>畅&nbsp;享</h3>
			<input placeholder="请输入账号" type='text' />
			<input placeholder="请输入密码" type='text' />
			<router-link tag='span' to='/ViewPage'>
				<input type="button" value="登 录" />
			</router-link>
			<ul>
				<li>忘记密码</li>
				<li>注册</li>
			</ul>
		</form>
	</div>
</template>

<script>
</script>

<style lang="less">
	.login {
		&.center-bg {
			display: flex;
			align-items: center;
			justify-content: center;
			background: url(./bg.jpg) no-repeat;
			background-size: cover;
			height: 100%;
		}
		form {
			width: 90%;
			max-width: 400px;
			height: 368px;
			background: #fff;
			border-radius: 8px;
			h3 {
				text-align: center;
				line-height: 80px;
				font-size: 36px;
				font-weight: normal;
				color: #ffb300;
			}
			input[type='text'] {
				display: block;
				width: 80%;
				margin: 24px auto;
				line-height: 30px;
				height: 30px;
				border: none;
				border-bottom: 1px solid #cdcdcd;
				outline: none;
				padding: 4px 10px;
				font-size: 14px;
			}
			input[type='button'] {
				display: block;
				width: 70%;
				margin: 36px auto;
				text-align: center;
				line-height: 30px;
				height: 30px;
				background: #ebba49;
				color: #fff;
				font-size: 20px;
				border: none;
				border-radius: 8px;
				outline: none;
				cursor: pointer;
			}
			ul {
				float: right;
				color: #878787;
				margin-top: 8px;
				margin-right: 16px;
				li {
					float: left;
					cursor: pointer;
					margin-right: 20px;
				}
			}
		}
	}
</style>