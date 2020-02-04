```ts
import connect from './src'
import { some, isSome } from 'fp-ts/lib/Option'

type UserCreated = {
  name: string
}

type MyExchanges = {
  userCreated: (userCreated: UserCreated) => void
}

const publishers: MyExchanges = {
  userCreated: () => { }
}

const getPublishers = connect({ host: 'localhost' }, some(publishers), [])

getPublishers.then(publish => {
  if (isSome(publish)) {
    publish.value.userCreated({ name: 'jhon' })
  }
})
```