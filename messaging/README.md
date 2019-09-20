# Messaging

## Getting started
### Create your consumer
```
const storeUserCreated = msg => console.log(JSON.parse(msg.content))
```

### Connecting to the host and creating channels
```
import connect from '"@fw7/messaging'

const publish = ['storeUserCreated']
const host = 'http://localhost:4000/'
const consume = [{ exchange: 'storeUserCreated', fn: storeUserCreated }]

connect(consume, publish, { host })
```

### Publishing
```
import publish from '@fw7/messaging/publisher'

const user = { name: 'test' }

publish.storeUserCreated(JSON.stringify(user))
```
