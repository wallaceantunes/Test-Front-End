import { ClientProvider } from '../providers/client'

export class GetById {
    client = new ClientProvider()
    async execute(id) {
        const resp = await this.client.getById(id)
        return resp

    }
}
