<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		created() {
			let that = this;
			let frist=false;
			document.addEventListener('plusready', function() {
				var webview = plus.webview.currentWebview();
				plus.key.addEventListener('backbutton', function() {
					webview.canBack(function(e) {
						if(that.$route.name == "ViewPage") {
							if(frist){
									webview.close();
							}else{
								frist=new Date().getTime();
								setTimeout(()=>{
									frist=false
								},1000)
							}
						
						} else {
//          	  webview.back();
							that.$router.go(-1);

						}
					})
				});
			});
		}
	}
</script>

<style lang='less'>
	html {
		height: 100%;
	}
	
	body {
		height: 100%;
	}
	
	#app {
		height: 100%;
	}
</style>