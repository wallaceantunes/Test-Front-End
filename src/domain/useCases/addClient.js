import { ClientProvider } from '../providers/client'

export class AddClient {
    client = new ClientProvider()
    async execute(data) {
        const resp = await this.client.addClient(data)
        return resp

    }
}
