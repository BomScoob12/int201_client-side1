//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { error } from "console"

export class BankAccount {
  constructor() {
    this._balance
    this.isOpen = false
  }

  open() {
    if (this.isOpen) throw new ValueError()
    this._balance = 0
    this.isOpen = true
  }

  close() {
    if(!this.isOpen) {
      throw new ValueError()
    } else {
      this.isOpen = false
    }
  }

  deposit(amount) {
    if (amount <= 0 || !this.isOpen) throw new ValueError()
    this._balance += amount
  }

  withdraw(amount) {
    if (amount <= 0 || !this.isOpen || amount > this._balance) throw new ValueError()
    this._balance -= amount
  }

  get balance() {
    if(!this.isOpen) throw new ValueError()
    return this._balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}
