# Token

## Generating a token
```
import { generate } from '@fw7/token'

const configs = { expiresIn: '6h' }

const generateWithMyKey = generate('my_key', configs)

const token = generateWithMyKey({ userId: 1 })
```

## Expiration time format
[ms project](https://github.com/zeit/ms)