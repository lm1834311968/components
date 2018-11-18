const state = {
	favoriteList: [], //喜爱的歌曲
	songList: [{ //当前播放数据
		authorName: "石凯",
		img: "http://singerimg.kugou.com/uploadpic/softhead/400/20150515/20150515165442983801.jpg",
		playUrl: "http://fs.w.kugou.com/201811181422/7bf3a047e06f37b2b843ee62394483b2/G106/M08/0C/14/qg0DAFvudfiAPsqoADals0Wqq1k714.mp3",
		songName: "可能否+游移的月亮 (Live)",
		timelength: "03:43"
	}], //当前播放列表
	currentSong: { //当前播放数据
		authorName: "石凯",
		img: "http://singerimg.kugou.com/uploadpic/softhead/400/20150515/20150515165442983801.jpg",
		playUrl: "http://fs.w.kugou.com/201811181422/7bf3a047e06f37b2b843ee62394483b2/G106/M08/0C/14/qg0DAFvudfiAPsqoADals0Wqq1k714.mp3",
		songName: "可能否+游移的月亮 (Live)",
		timelength: "03:43"
	},
	songPlay: false, //暂停还是播放
	playMode: 1 //播放方式，0表示顺序播放，1表示随机播放，2表示单曲循环
}
export default state