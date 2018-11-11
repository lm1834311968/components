import * as types from './mutations-types'

const mutations = {
	[types.pageRouter](state, pageRouter) {
		state.pageRouter = pageRouter
	},
	[types.favoriteList](state, favoriteList) {
		state.favoriteList = favoriteList
	},
	[types.songList](state, songList) {
		state.songList = songList
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