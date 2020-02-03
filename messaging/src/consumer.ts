import { Channel } from 'amqplib'
import { Consumer } from './types'

const exchangeCfg = { durable: false }
const assertCfg = { durable: false }
const consumeCfg = { noAck: true }

const connect = (channel: Channel, exchanges: Consumer[]) => {
  exchanges.forEach(async ({ exchange, fn }) => {
    channel.assertExchange(exchange, 'fanout', exchangeCfg)

    const q = await channel.assertQueue('', assertCfg)
    channel.bindQueue(q.queue, exchange, '')
    channel.consume(q.queue, fn, consumeCfg)
  })
}

export default connect