```ts
import connect, { Message, Consumer } from '@fw7/messaging'

const userCreated = (msg: Message | null) => {
  console.info('The user was created!')
}

const consumers: Consumer[] = [{
  exchange: 'userCreated',
  fn: userCreated
}]

connect({ host: 'localhost' }, consumers)
```