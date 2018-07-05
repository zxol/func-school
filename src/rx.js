// const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
// const { map, filter, switchMap } = require('rxjs/operators');
//
// range(1, 200)
//   .pipe(filter(x => x % 2 === 1), map(x => x + x))
//   .subscribe(x => console.log(x));

import R from 'ramda'
import _ from 'lodash'
// import * as Rx from 'rxjs/Rx'
import { Observable } from 'rxjs/Observable'
import { map, concatMap, repeat, delay } from 'rxjs/operators'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'

const data = [
    {name: "first"},
    {name: "second"},
    {name: "third"},
    {name: "fourth"},
    {name: "fifth"},
    {name: "sixth"},
    {name: "seventh"},
    {name: "eighth"},
    {name: "ninth"},
]

const data2 = [
    {name: "first"},
    {name: "second"},
    {name: "third"},
    {name: "fourth"},
    {name: "fifth"},
    {name: "sixth"},
    {name: "seventh"},
    {name: "eighth"},
    {name: "ninth"},
]

let cool = Observable.from(data)

const coolmapped = cool
    |> map(x => x)

coolmapped.subscribe(console.log)

// const stream = Rx.Observable.from(data).map(x => Rx.Observable.of(x).delay(1000)).concatAll()
// stream.subscribe(console.log)

// const delay = Rx.Observable.empty().delay(500)
// const myDelay = x => Rx.Observable.of(x).concat(delay)
// const stream2 = Rx.Observable.from(data).concatMap(myDelay)
// stream2.repeat().subscribe(x => console.log(x.name))


const constantRateStream = function (data, eventsPerMinute) {
    // const delay = Rx.Observable.empty().delay(60000 / eventsPerMinute)
    // const myDelay = x => Rx.Observable.of(x).concat(delay)
    // return Rx.Observable.from(data).concatMap(myDelay).repeat()

    return Observable.from(data)
        |> concatMap(x => Observable.of(x) |> delay(60000 / eventsPerMinute))
        |> map(x => x.name)
        |> repeat()
}

constantRateStream(data, 100).subscribe(console.log)





// var delayedStream = Rx.Observable.interval(2000).take(data.length).map(i => data[i])
// delayedStream.subscribe(console.log)
