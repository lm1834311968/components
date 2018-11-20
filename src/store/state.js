const state = {
	favoriteList: [], //喜爱的歌曲
	songList: [{ //当前播放数据
		authorName: "张韶涵",
		img: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=1c94e8fe53df8db1aa6421377b4cad69/f3d3572c11dfa9eccae7bf716fd0f703908fc18f.jpg",
		playUrl: "http://www.minlu.shop:8080/music/dZQEAFvGGduANmzGAEQsL9K9TKA693.mp3",
		songName: "亲爱的那不是爱情",
		timelength: "03:43"
	}], //当前播放列表
	currentSong: { //当前播放数据
		authorName: "张韶涵",
		img: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=1c94e8fe53df8db1aa6421377b4cad69/f3d3572c11dfa9eccae7bf716fd0f703908fc18f.jpg",
		playUrl: "http://www.minlu.shop:8080/music/dZQEAFvGGduANmzGAEQsL9K9TKA693.mp3",
		songName: "亲爱的那不是爱情",
		timelength: "03:43"
	},
	songPlay: false, //暂停还是播放
	playMode: 1 //播放方式，0表示顺序播放，1表示随机播放，2表示单曲循环
}
export default state