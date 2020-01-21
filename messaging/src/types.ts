import { Message } from "amqplib";

/**
 * Interfaces.
 */
export interface ConnectionConfig {
  host: string
}

export interface Consumer {
  exchange: string,
  fn: (msg: Message | null) => any
}