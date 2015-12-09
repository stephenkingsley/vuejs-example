<template>
	<div>
		vue component {{msg}}
	</div>
	<div>
		<button v-on:click="handleClick">子组件的按钮，点击dispacher父组件</button>
	</div>
</template>

<script>
	export default {
		props: ['propsMsg'],
		data() {
			var that = this;
			return {
				msg: that.propsMsg,
				dispatchMsg: "点击了子组件的按钮"
			}
		},
		beforeCompile() {
			//console.log("=====>beforeCompile", this.propsMsg);
		},
		compiled() {
			this.$watch('propsMsg', function(newVal, oldVal) {
				//console.log("=====>change val");
				this.msg = this.propsMsg
			});
		},
		methods: {
			handleClick() {
				this.$dispatch('child-msg', this.dispatchMsg);
			}
		}
	}
</script>