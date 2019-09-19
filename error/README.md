# Error

## throwErr
[a] → void

a: { type, message }

Example:
```
import { throwErr, error } from '@lib/error'

const myTypeError = error('My_Type')
const myError = myTypeError('My_Message')
const otherError = myTypeError('Other_Message')
throwErr([myError, otherError])
```
