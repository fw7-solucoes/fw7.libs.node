```ts
import connect from '@fw7/messaging'
import { isSome } from 'fp-ts/lib/Option'

type UserCreated = {
  name: string
}

type MyPublishers = {
  userCreated: (message: UserCreated) => void
}

const publishers: MyPublishers = {
  userCreated: (message: UserCreated) => { }
}

const getPublishers = connect({ host: 'localhost' }, [], publishers)

getPublishers.then(publish => {
  if (isSome(publish)) {
    publish.value.userCreated({ name: 'jhon' })
  }
})
```