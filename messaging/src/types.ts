import { Message } from 'amqplib'

export type Publishers = {
  [key: string]: Function
}

export type ConnectionConfig = {
  host: string
}

export type Consumer = {
  exchange: string
  fn: (msg: Message | null) => any
}

export { Message } from 'amqplib'