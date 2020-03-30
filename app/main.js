import Vue from 'nativescript-vue';

import Acceuil from './components/Accueil';

new Vue({
  render: function(h) {
    //if (loggedIn) {
      return h("Frame", [h(Acceuil)]);
    //}
    //else {
      return h("Frame", [h(App1)]);
    //}
  }
}).$start()
 