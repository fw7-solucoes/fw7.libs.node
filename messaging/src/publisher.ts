import { Channel } from 'amqplib'

const assertCfg = { durable: false }

function connect<T extends object>(channel: Channel, publishers: T): T {
  const response = {}

  Object.keys(publishers).forEach(exchange => {
    channel.assertExchange(exchange, 'fanout', assertCfg)

    Object.defineProperty(
      response,
      exchange,
      {
        writable: false,
        value: (msg: Object) => {
          const msgStr = Buffer.from(JSON.stringify(msg))
          channel.publish(exchange, '', msgStr)
        }
      }
    )
  })

  return response as T
}

export default connect
