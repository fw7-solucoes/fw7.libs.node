import { Connection } from "amqplib/callback_api"

import { Consumer } from './types'

const exchangeCfg = { durable: false }
const assertCfg = { durable: false }
const consumeCfg = { noAck: true }

const connect = (connection: Connection, exchanges: Consumer[]) => {
  connection.createChannel((error, channel) => {
    if (error) throw error

    exchanges.forEach(({ exchange, fn }) => {
      channel.assertExchange(exchange, 'fanout', exchangeCfg)

      channel.assertQueue('', assertCfg, (queueError, q) => {
        if (queueError) throw queueError

        channel.bindQueue(q.queue, exchange, '')
        channel.consume(q.queue, fn, consumeCfg)
      })
    })
  })
}

export default connect
