import R from 'ramda'
import { HmacSHA256 } from 'crypto-js'

const encrypt = R.curry((key, msg) => HmacSHA256(msg, key).toString())

export default encrypt
