/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { id: 1, title: 'Продукты', description: 'купить хлеб, яйца, морковь', createdAt: new Date(), done: false},
      { id: 2, title: 'Уборка', description: 'Убраться дома', createdAt: new Date(), done: true },
      { id: 3, title: 'Сходить в поликлинику', description: 'пойти в кабинет №141', createdAt: new Date(), done: true },
      { id: 4, title: 'Купить телефон', description: 'следить за новинками', createdAt: new Date(), done: false },
      { id: 5, title: 'Съездить за внуком', description: 'забрать внука из садика', createdAt: new Date(), done: false },
      { id: 6, title: 'поменять масло', description: 'новое масло не такое вкусное как раньше', createdAt: new Date(), done: false },
    ],
  },
  getters: {},
  mutations: {
    addItem(state, newItem) {
      state.items.push(newItem);
    },
    removeItem(state, newItemId) {
      state.items = state.items.filter((item) => item.id !== newItemId);
    },
    changeStatus(state, itemId){
      let newItem = state.items.find((item) => item.id === itemId);
      newItem.done = !newItem.done;
    }
  },
  actions: {},
  modules: {},
});
