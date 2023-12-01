{
  class BankAccount {
    //public but readonly
    public readonly id: number;
    public name: string;
    // private _balance: number; // private property use krle only class er mddhe access kora jbe.
    protected _balance: number; // protected property use na krle amra onno class a er access nite parbo na.

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  const poorMan = new BankAccount(111, "Poor Man", 2000);
  //   console.log(poorMan.balance)

  poorMan.addDeposit(3000);

  const myBalance = poorMan.getBalance();
  console.log(myBalance);
}
