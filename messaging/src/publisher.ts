import { Connection, Channel } from 'amqplib/callback_api'

/**
 * Types
 */
type Exchange = {
  [key: string]: Function
}

const exchanges: Exchange = {}

const assertCfg = { durable: false }

export const connect = (connection: Connection, publishers: string[]) => {
  const fn = (error: any, channel: Channel) => {
    if (error) throw error

    publishers.forEach(exchange => {
      channel.assertExchange(exchange, 'fanout', assertCfg)
      exchanges[exchange] = (msg: Object) => {
        const msgStr = Buffer.from(JSON.stringify(msg))
        channel.publish(exchange, '', msgStr)
      }
    })
  }

  connection.createChannel(fn)
}

export default exchanges
