import { ApiProvider } from './api'

export class ClientProvider {
  constructor () {
    this.api = new ApiProvider()
    this.cepApi = new ApiProvider('https://viacep.com.br/')
  }
  async getAll () {
    const resp = await this.api.get('clients/all')
    return resp.data
  }
  async getById (id) {
    const resp = await this.api.get(`clients/${id}/show`)
    return resp.data
  }
  async addClient (data) {
    const resp = await this.api.post('clients/store', data)
    return resp.data
  }
  async removeClient(id) {
    const resp = await this.api.remove(`clients/${id}/delete`)
    return resp.data

  }
  async getCep(cep){
    const resp = await this.cepApi.get(`ws/${cep}/json/`)
    return resp.data
  }
  async editClient(id, data) {
    const resp = await this.api.patch(`clients/${id}/update`, data)
    return resp.data
  }
}
