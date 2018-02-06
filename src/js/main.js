import '../css/main.scss';
import {a} from './util';
import Vue from 'vue';
import App from './App.vue'
new Vue({
    el: '#app',
    template: '<app></app>',
    components: {
        App
    }
});

(function(){
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = hWidth/10 + 'px';
  })()
 
  