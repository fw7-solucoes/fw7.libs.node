const exchanges = {}

const assertCfg = { durable: false }

export const connect = (connection, publishers) => {
  connection.createChannel((error, channel) => {
    if (error) throw error

    publishers.forEach(exchange => {
      channel.assertExchange(exchange, 'fanout', assertCfg)
      exchanges[exchange] = msg => channel.publish(exchange, '', Buffer.from(msg))
    })
  })
}

export default exchanges
