import { ClientProvider } from '../providers/client'

export class GetAll {
    client = new ClientProvider()
    async execute() {
        const resp = await this.client.getAll()
        return resp

    }
}
