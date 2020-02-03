```ts
import connect from '@fw7/messaging'
import { isSome } from 'fp-ts/lib/Option'

type MyExchanges = {
  userCreated: () => void
}

const publishers: MyExchanges = {
  userCreated: () => { }
}

const getPublishers = connect({ host: 'localhost' }, publishers, [])

getPublishers.then(publish => {
  if (isSome(publish)) {
    publish.value.userCreated({ name: 'jhon' })
  }
})
```