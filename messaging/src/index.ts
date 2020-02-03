import amqp, { Message } from 'amqplib'
import bindConsumers from './consumer'
import bindPublishers from './publisher'
import { Consumer, ConnectionConfig } from './types'
import { Option, some, none, isNone } from 'fp-ts/lib/Option'

export function getJsonContent<T>(msg: Message | null) {
  return !msg
    ? none
    : some(JSON.parse(msg.content.toString()) as T)
}

async function start<T extends object>(cfg: ConnectionConfig, publish: Option<T>, consume: Consumer[]) {
  const open = await amqp.connect(cfg.host || 'localhost')

  const channel = await open.createChannel()

  bindConsumers(channel, consume)

  return isNone(publish) ? none : some(bindPublishers(channel, publish.value))
}

export * from './types'
export default start
