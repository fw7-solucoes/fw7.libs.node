# Messaging

## Examples

Check the [examples folder](https://github.com/fw7-solucoes/fw7.libs.node/tree/master/messaging/examples)

## Warning

It's important to configure the **queue** name when you have consumers among different services listening to the same exchange. The queue name will garantee that only one service by queue will receive the message! Check the [ConnectionConfig](https://github.com/fw7-solucoes/fw7.libs.node/blob/master/messaging/src/types.ts) for more configs.