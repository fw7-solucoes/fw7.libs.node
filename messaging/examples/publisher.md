```ts
import connect from '@fw7/messaging'
import { isSome } from 'fp-ts/lib/Option'

type UserCreated = {
  name: string
}

const publishers: Publishers = {
  userCreated: (message: UserCreated) => { }
}

const getPublishers = connect({ host: 'localhost' }, [], publishers)

getPublishers.then(publish => {
  if (isSome(publish)) {
    publish.value.userCreated({ name: 'jhon' })
  }
})
```