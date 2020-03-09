import { Channel } from 'amqplib'

const assertCfg = { durable: false }

const connect = <T extends object>(channel: Channel, publishers: T) => {
  const response = {}

  Object.keys(publishers).forEach(exchange => {
    channel.assertExchange(exchange, 'fanout', assertCfg)

    Object.defineProperty(
      response,
      exchange,
      {
        enumerable: true,
        writable: false,
        value: (msg: Object) => {
          const msgStr = Buffer.from(JSON.stringify(msg))
          channel.publish(exchange, '', msgStr)
        }
      }
    )
  })

  const dispatch = (exchange: string, msg: Object) => {
    const msgStr = Buffer.from(JSON.stringify(msg))
    channel.publish(exchange, '', msgStr)
  }

  return {
    dispatch,
    ...(response as T)
  }
}

export default connect
