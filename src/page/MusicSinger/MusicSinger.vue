<template>
	<div>
		<back ref='toped'>
			<div>{{title}}</div>
		</back>
		<order-list :heighted="heighted" :dataed="orderList" class="has-top"></order-list>
	</div>
</template>

<script>
	import Back from "components/Back"
	import OrderList from 'components/OrderList'
	import axios from "axios"

	export default {
		data() {
			return {
				title: '',
				orderList: {},
				heighted:40
			}
		},
		mounted() {
			this.title = this.$route.query.name;
			this.getOrderList();
		
		},
		methods: {
			getOrderList() {
				axios.get(this.GLOBAL.SONGERIP).then(this.setOrderList);
			},
			setOrderList(res) {
				let _list = [];
				let _listed = [];
				let _res = res.data.data.list;
				_res.forEach((val, index) => {
					if(_list[val["Findex"]]) {
						_list[val["Findex"]].items.push({
							name: val.Fsinger_name,
							id: val.Fsinger_id
						})
					} else {
						_list[val["Findex"]] = {
							title: val["Findex"],
							items: [{
								name: val.Fsinger_name,
								id: val.Fsinger_id
							}]
						}
					}
				})
				for(let item in _list) {
					_listed.push(_list[item]);
				}
				_listed.sort((a, b) => {
					return a.title.charCodeAt(0) - b.title.charCodeAt(0);
				})
				this.orderList = _listed;

			}
		},
		components: {
			Back,
			OrderList
		}
	}
</script>

<style>

</style>