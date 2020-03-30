import localStorage from 'nativescript-localstorage';

const store = new Vuex.Store({
    state: {
      // array of grocery items
      items: [],
      // array of ongoing tasks. We keep track of the tasks to show/hide the
      // activity indicator in the groceries page.
      processingTasks: []
    },
    mutations,
    actions,
    getters,
    strict: debug,
  });

Vue.prototype.$store = store;

export default store;