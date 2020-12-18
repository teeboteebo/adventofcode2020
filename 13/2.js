const fs = require('fs')
let skipCount = 0
const busses = fs.readFileSync('./input.txt', 'utf-8').split('\n')[1].split(',')
  // .map(bus => { return bus === 'x' ? bus : Number(bus) })
  .map(bus => {
    if (bus === 'x') {
      skipCount++
      return false
    } else {
      const busObj = { bus:Number(bus), skips: skipCount }
      skipCount = 0
      return busObj
    }
  })
  .filter(bus => bus !== false)
  .map(bus => {
    const array = []
    const skip = { bus: bus.bus, allowed: false }
    for (let i = 0; i < bus.skips; i++) {
      array.push(skip)
    }
    array.push({ bus: bus.bus, allowed: true })
    return array
  }).flat()
// console.log(busses)
let i = 836024966345345 - 37
let sequence = undefined
while(!sequence && i < 836024966345345 + 37 * 4){
  console.log(i);
  const bussesMatch = busses.map((bus, busindex) => {
    return {bus: bus.bus , runs: busRunsOk(bus.bus, busindex + i, bus.allowed)}
  });
  if (i === 836024966345345) console.log(bussesMatch)
  if((bussesMatch.filter(bus => bus.runs)).length === busses.length) {
    
    sequence = i
  }
  i += 37
}
console.log('sequence', sequence);
function busRunsOk(busNo, minute, expected) {
  return (minute % busNo === 0) === expected
}
// const onlyBusses = [...busses].filter(bus => bus !== 'x')
// let minute = 0 
// let nextBus = onlyBusses[0]


// // function busRuns(minute, bus) {
// //   return minute % bus === 0 
// // }
// console.log(busses);
// console.log(onlyBusses);
// busses.map(bus => console.log(bus, time/bus))
console.log('answer:',)
// const busses = input[1].split(',').filter(bus => Number(bus)).map(bus => {
//   bus = Number(bus)
//   const busObj = {
//     bus: bus,
//     val: time / bus % 1,
//     nextDeparture: Math.floor(time / bus + 1) * (bus)
//   };
//   return busObj
// }).sort((a, b) => a.val > b.val ? -1 : 1)