import { connect, Message } from 'amqplib'
import bindConsumers from './consumer'
import bindPublishers from './publisher'
import { Consumer, ConnectionConfig, Publishers } from './types'
import { some, none } from 'fp-ts/lib/Option'

export function getJsonContent<T>(msg: Message | null) {
  return !msg
    ? none
    : some(JSON.parse(msg.content.toString()) as T)
}

async function start<T extends Publishers>(cfg: ConnectionConfig, consume: Consumer[], publish?: T) {
  const open = await connect(cfg.host)

  const channel = await open.createChannel()

  bindConsumers(channel, consume)

  return !publish ? none : some(bindPublishers(channel, publish))
}

export * from './types'
export default start
