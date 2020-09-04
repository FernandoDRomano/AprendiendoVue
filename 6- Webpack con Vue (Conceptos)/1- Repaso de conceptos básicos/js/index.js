//console.log("Hola mundo desde webpack con Vue")
import test1 from './test1.js'
import test2 from './test2.js'
import familia from '../img/familia.jpg'

console.log(`${test1}, ${test2}`)

const img = document.createElement('img');
img.src = familia
document.body.appendChild(img)