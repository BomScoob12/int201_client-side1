//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { error } from "console"

export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) && !this.isPrime(g) ) {
      console.error('error')
    }
    this.p = p
    this.g = g
    this.privateKey =  Math.floor(Math.random() * (p-1)) + 1 // less than p
  }

  isPrime(primeNumber) {
    if (primeNumber <= 1) return false
    if (primeNumber <= 3) return true
    for (let i = 1; i<primeNumber; i++){
      if(primeNumber%i === 0) return false
    }
  }

  getPublicKey(privateKey) {
    if (privateKey < 0) throw error ('number is negative')
    if (privateKey === 0) throw error ('Private key is zero')
    const {p, g} = this //destructure from this object to {x,y}
    return Math.pow(g, privateKey) % p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    if (theirPublicKey === myPrivateKey) {
      return this.privateKey;
    }
  }
}


// function getPublicKey(privateKey) {
//   const p = 5;
//   const g = 11;
//   return Math.pow(base, privateKey) % prime;
// }

// console.log(getPublicKey(2))