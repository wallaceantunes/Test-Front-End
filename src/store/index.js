import Vue from 'vue'
import Vuex from 'vuex'
import { GetAll } from '../domain/useCases/getAll'
import { AddClient } from '../domain/useCases/addClient'
import { RemoveClient } from '../domain/useCases/removeClient'
import { GetCep } from '../domain/useCases/getCep'
import { GetById } from '../domain/useCases/getById'
import { EditClient } from '../domain/useCases/editClient'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clients: '',
    client: '',
    enderecoCep: '',
    errorMessage: null,
    statusMessage: null

  },
  mutations: {
    setClients(state, clients) {
      state.clients = clients
    },
    setClient(state, client) {
      state.client = client
    },
    setEnderecoCep(state, enderecoCep) {
      state.enderecoCep = enderecoCep
    },
    setError(state, errorMessage){
      state.errorMessage = errorMessage
    },
    setStatus(state, statusMessage){
      state.statusMessage = statusMessage
    }
  },
  actions: {
    async getAll(context) {
      try {
        const getAll = new GetAll()
        const allClients = await getAll.execute()
        context.commit('setClients', allClients.data.data)
      } catch (error) {
        // context.commit('setError', error)
      }
    },
    async getById(context, id) {
      try {
        const getClient = new GetById()
        const client = await getClient.execute(id)
        context.commit('setClient', client.data)
      } catch (error) {
        context.commit('setError', 'Usuário não encontrado')
      }
    },
    async removeClient(context, id) {
      try {
        const removeClient = new RemoveClient()
        const allClients = await removeClient.execute(id)
        context.commit('setClients', allClients.data.data)
      } catch (error) {
        // context.commit('setError', error)
      }
    },
    async addClient(context, data) {
      try {
        const addClient = new AddClient()
        await addClient.execute(data)
        context.commit('setError', null)
        context.commit('setStatus', 'Cadastro concluido')
      } catch (error) {
        let errorMsg = []
        if(error?.response?.data?.errors){
          for(const msg in error?.response?.data?.errors){
            errorMsg = [...errorMsg, ...error?.response?.data?.errors[msg]]
          }
        }else{
          errorMsg = ['Erro interno']
        }
        context.commit('setError', errorMsg.join('\n'))
      }
    },
    async editClient(context, {id, data}) {
      try {
        const editClient = new EditClient()
        await editClient.execute(id, data)
        context.commit('setError', null)
        context.commit('setStatus', 'Cadastro concluido')
      } catch (error) {
        let errorMsg = []
        if(error?.response?.data?.errors){
          for(const msg in error?.response?.data?.errors){
            errorMsg = [...errorMsg, ...error?.response?.data?.errors[msg]]
          }
        }else{
          errorMsg = ['Erro interno']
        }
        context.commit('setError', errorMsg.join('\n'))
      }
    },
    async getCep(context, cep){
      try {
        const getCep = new GetCep()
        const enderecoCep = await getCep.execute(cep)
        context.commit('setEnderecoCep', enderecoCep)
      } catch (error) {
        // context.commit('setError', error)
      }
    }
  },
  modules: {}
})