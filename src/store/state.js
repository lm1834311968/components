const state={
	pageRouter:false,//文章详细页显示
	favoriteList:[],//喜爱的歌曲
	songList:[{					//当前播放数据
				"id": 74150687,
				"name": "上新了·故宫",
				"picUrl": "http://p1.music.126.net/bUw0U4kkOdCkKy85ir_c9Q==/109951163635110634.jpg",
				"url": "http://www.minlu.shop:8080/music/Rg0DAFT7D-OAYNBXAFdNb9-h8b0642.mp3",
				"author": "邓伦",
				"tns": [],
				"pic_str": "109951163635110634",
				"pic": 109951163635110634
			}],//当前播放列表
	currentSong: {					//当前播放数据
				"id": 74150687,
				"name": "上新了·故宫",
				"picUrl": "http://p1.music.126.net/bUw0U4kkOdCkKy85ir_c9Q==/109951163635110634.jpg",
				"url": "http://www.minlu.shop:8080/music/Rg0DAFT7D-OAYNBXAFdNb9-h8b0642.mp3",
				"author": "邓伦",
				"tns": [],
				"pic_str": "109951163635110634",
				"pic": 109951163635110634
			},
	songPlay:false,				//暂停还是播放
	playMode:1                  //播放方式，0表示顺序播放，1表示随机播放，2表示单曲循环
}
export default state