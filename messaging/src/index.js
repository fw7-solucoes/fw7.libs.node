import amqp from 'amqplib/callback_api'
import { connect as publisher } from './publisher'
import consumer from './consumer'

const connect = (consume, publish, cfg) => {
  amqp.connect(`amqp://${cfg.host || 'localhost'}`, (error, connection) => {
    if (error) throw error

    if (consume) consumer(connection, consume)

    if (publish) publisher(connection, publish)
  })
}

export default connect
