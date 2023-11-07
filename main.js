class Bankaccount{
	constructor(accountnumber,balance){
	    this.accountnumber=accountnumber;
		this.balance=balance;
    }
	
	mini(){
		document.write(`Your balance is: ${this.balance}<br>`)
	}

	deposit(a){
		let c=this.balance+a;
		document.write(`your account deposit in : ${c}<br>`)
		this.balance=c;
	}

	withdraw(b){
		let d=this.balance-b;
		document.write(`withdraw : ${d}`)
		this.balance=d;
    }
}
let res=new Bankaccount(10004591,2000);
res.mini();
res.deposit(300);
res.withdraw(700);	