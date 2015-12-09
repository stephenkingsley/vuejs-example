var Vue = require('vue')
var App = require('./components/app.vue')

var app = new Vue(App);
app.$mount("#root");