import { Channel } from 'amqplib'
import { Message, Consumer } from './types'

const assertCfg = { durable: false }
const consumeCfg = { noAck: true }

const connect = async (channel: Channel, exchanges: Consumer[], queue?: string) => {
  const q = await channel.assertQueue(queue || '', assertCfg)

  exchanges.forEach(({ exchange }) => channel.bindQueue(q.queue, exchange, ''))

  const onReceive = (message: Message | null) => {
    if (!message) return
    
    const receive = exchanges.find(({ exchange }) => exchange === message.fields.exchange)

    if (!receive) return

    receive.fn(message)
  }

  channel.consume(q.queue, onReceive, consumeCfg)
}

export default connect
