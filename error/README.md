# Error

## throwErr
a → void

a: { code, message }

Example:
```
import { throwErr, error } from '@lib/error'

const errorCode = error('UNAUTHENTICATED')
const authError = errorCode('You must be authenticated')
throwErr(authError)
```
