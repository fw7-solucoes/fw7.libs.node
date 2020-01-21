import amqp from 'amqplib/callback_api'

import consumer from './consumer'
import { connect as publisher } from './publisher'
import { Consumer, ConnectionConfig } from './types'

const connect = (consume: Consumer[], publish: string[], cfg: ConnectionConfig) => {
  amqp.connect(cfg.host || 'localhost', (error, connection) => {

    if (error) throw error

    if (consume) consumer(connection, consume)

    if (publish) publisher(connection, publish)
  })
}

export default connect
