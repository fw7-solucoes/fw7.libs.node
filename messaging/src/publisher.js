const exchanges = {}

const assertCfg = { durable: false }

export const connect = (connection, publishers) => {
  connection.createChannel((error, channel) => {
    if (error) throw error

    publishers.forEach(exchange => {
      channel.assertExchange(exchange, 'fanout', assertCfg)
      exchanges[exchange] = msg => {
        const msgStr = Buffer.from(JSON.stringify(msg))
        channel.publish(exchange, '', msgStr)
      }
    })
  })
}

export default exchanges
