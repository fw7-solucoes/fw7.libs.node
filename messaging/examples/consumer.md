```ts
import connect from '@fw7/messaging'
import { none } from 'fp-ts/lib/Option'

const userCreated = (msg: Message | null) => {
  console.info('The user was created!')
}

const consumers: Consumer[] = [{
  exchange: 'userCreated',
  fn: userCreated
}]

connect({ host: 'localhost' }, none, consumers)
```