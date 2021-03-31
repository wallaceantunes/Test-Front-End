import { ClientProvider } from '../providers/client'

export class RemoveClient {
    client = new ClientProvider()
    async execute(id) {
        const resp = await this.client.removeClient(id)
        return resp

    }
}
