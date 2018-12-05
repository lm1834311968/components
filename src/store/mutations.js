import * as types from './mutations-types'

const mutations = {
	[types.songList](state, songList) {
		state.songList = songList;
	},
	[types.setSongList](state, itemDetail) {
		let canSet = canSetList(state.songList, itemDetail)
		if(canSet) {
			state.songList.push(itemDetail)
			window.localStorage.setItem("songList", JSON.stringify(state.songList));
		}
	},
	[types.removeSongList](state, itemDetail) {
		let _index = canRemoveList(state.songList, itemDetail)
		state.songList.splice(_index, 1);
		window.localStorage.setItem("songList", JSON.stringify(state.songList));
	},

	[types.favoriteList](state, favoriteList) {
		state.favoriteList = favoriteList;
	},
	[types.setFavoriteList](state, itemDetail) {
		let canSet = canSetList(state.favoriteList, itemDetail)
		if(canSet) {
			state.favoriteList.push(itemDetail);
			window.localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
		}
	},
	[types.removeFavoriteList](state, itemDetail) {
		let _index = canRemoveList(state.favoriteList, itemDetail);
		state.favoriteList.splice(_index, 1);
		window.localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
	},

	[types.songPlay](state, songPlay) {
		state.songPlay = songPlay
	},
	[types.currentSong](state, currentSong) {
		state.currentSong = currentSong
		window.localStorage.setItem("currentSong", JSON.stringify(state.currentSong));
	},

	[types.currentSongList](state, currentSongList) {
		state.currentSongList = currentSongList;
		window.localStorage.setItem("currentSongList", JSON.stringify(state.currentSongList));
	},
	[types.setCurrentSongList](state, itemDetail) {
		let canSet = canSetList(state.currentSongList, itemDetail)
		if(canSet) {
			state.currentSongList.push(itemDetail);
			window.localStorage.setItem("currentSongList", JSON.stringify(state.currentSongList));
		}
	},
	[types.removeCurrentSongList](state, itemDetail) {
		let _index = canRemoveList(state.currentSongList, itemDetail)
		state.currentSongList.splice(_index, 1);
		window.localStorage.setItem("currentSongList", JSON.stringify(state.currentSongList));
	},
	
	[types.playMode](state, playMode) {
		state.playMode = playMode
	}

}

function canSetList(list, itemDetail) {
	let canSet = true;
	let songName = itemDetail.songName;
	list.forEach((value) => {
		if(value.songName == songName) {
			canSet = false;
		}
	})
	return canSet;
}

function canRemoveList(list, itemDetail) {
	let _index = 0;
	let songName = itemDetail.songName;
	list.forEach((value, index) => {
		if(value.songName == songName) {
			_index = index;
		}
	})
	return _index;
}
export default mutations