import { ClientProvider } from '../providers/client'

export class EditClient {
    client = new ClientProvider()
    async execute(id, data) {
        const resp = await this.client.editClient(id, data)
        return resp

    }
}
