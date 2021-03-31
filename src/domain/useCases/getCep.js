import { ClientProvider } from '../providers/client'

export class GetCep {
    client = new ClientProvider()
    async execute(cep) {
        const resp = await this.client.getCep(cep)
        return resp

    }
}
