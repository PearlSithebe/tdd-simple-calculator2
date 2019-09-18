class Calculator {
  constructor() {
    this.getSlot = [];
  }

  add() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum += parseFloat(arguments[i]);
      this.x = sum;
    }
    return sum;
  }

  multiply() {
    var multiplication = 1;
    for (let i = 0; i < arguments.length; i++) {
      multiplication *= parseFloat(arguments[i]);
      this.x = multiplication;
    }
    return multiplication;
  }
  last() {
    let result = this.x;
    return result;
  }
  setslot(slotNum) {
    this.getSlot.push(this.x);
    return this.getSlot[slotNum - 1];
  }

  getslot(k) {
    return this.getSlot[k - 1];
  }
}
