import { Channel } from 'amqplib'

const assertCfg = { durable: false }

function connect<T>(channel: Channel, publishers: T): T {
  const response = {}

  Object.keys(publishers).forEach(exchange => {
    channel.assertExchange(exchange, 'fanout', assertCfg)

    Object.assign(response, exchange, (msg: Object) => {
      const msgStr = Buffer.from(JSON.stringify(msg))
      channel.publish(exchange, '', msgStr)
    })
  })

  return response as T
}

export default connect
