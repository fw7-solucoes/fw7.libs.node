import R from 'ramda'
import { sign } from 'jsonwebtoken'

export const generate = R.curry((key, configs, data) => sign(data, key, configs))
