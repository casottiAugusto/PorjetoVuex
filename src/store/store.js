import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [],
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    },
  },
  mutations: {
    // multa()
    // {console.log('ta aqui na multation')},
    adcionarProduto(state, payload) {
      // payload=produto
      state.produtos.push(payload);
    },
  },
  actions: {
    adcionarProduto({commit}, payload) {
      setTimeout(() => {
        commit('adcionarProduto', payload);
      }, 1000);
    },
  },
});
