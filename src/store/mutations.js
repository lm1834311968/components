import * as types from './mutations-types'

const mutations = {
	[types.favoriteList](state, favoriteList) {
		state.favoriteList = favoriteList
	},
	[types.setSongList](state, songList) {
		let canSet=true;
		let songName=songList.songName;
		state.songList.forEach((value) => {
			if(value.songName ==songName) {
				canSet = false;
			}
		})
		if(canSet){
			state.songList.push(songList)
		}
	},
	[types.removeSongList](state, songList) {
		let _index=0;
		let songName=songList.songName;
		state.songList.forEach((value,index) => {
			if(value.songName ==songName) {
				_index = index;
			}
		})
		state.songList.splice(_index, 1);
	},
	[types.songPlay](state, songPlay) {
		state.songPlay = songPlay
	},
	[types.currentSong](state, currentSong) {
		state.currentSong = currentSong
	},
	[types.playMode](state, playMode) {
		state.playMode = playMode
	}
	
}

export default mutations