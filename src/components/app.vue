<template>
  <div>
    {{msg}}
    <div>
    	<input v-model="propsMsg" />
			<vue-component-one :props-msg="propsMsg" />
    </div>

    <hr />

    <div>
    	<button v-on:click="handleClick">dfadsfsad点击我修改propsMsg的值</button>
			<vue-component-two :props-msg="msg" v-on:child-msg="childEvent" />
    </div>
  </div>
</template>

<script>
	var vueComponentOne = require('./vue-component-one.vue');
	var vueComponentTwo = require('./vue-component-two.vue');
	export default {
	  data () {
	    return {
	      msg: '组件间的---通信',
	      propsMsg: "",
	      clickMsg: "点击了，我擦！"
	    }
	  },
	  methods: {
	  	handleClick() {
				this.msg = this.msg === "修改了msg的值，哈哈哈" ? "组件间的通信" : "修改了msg的值，哈哈哈";
	  	},
	  	childEvent(childMsg) {
	  		this.msg = childMsg
	  	}
	  },
	  components: {
	  	vueComponentOne,
	  	vueComponentTwo
	  }
	}
</script>