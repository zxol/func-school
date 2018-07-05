import S from 'sanctuary'
import R from 'ramda'
import _ from 'lodash'

const {
  test, is, pipe, lines, words, equals, map, sortBy, prop, pluck, maybe, just, chain
} = S
const {
  cond, once, replace, nth, pick, subtract
} = R

const sqrtMap = map(Math.sqrt)
const doubleMap = map(x => x * 2)
const squareMap = map(x => x * x)
const sqrtandsquare = pipe([sqrtMap, squareMap])

const idsMap = map(pick(['id']))
const reservationMap = map(pick(['inquiry_reservation']))
const sortById = sortBy(prop('id'))

const data = require('../testdata/threads.json').threads

// console.log( sqrtandsquare( [1,2,3,4] ) )
// console.log(idsMap(data))
// console.log(reservationMap(data))
// console.log(pipe([idsMap, sortById] ,data ))

// const just23 = S.Just(23)

// console.log(just23)

console.log("aaa".padStart(10, '0'))
