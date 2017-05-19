'use strict';

// console.log('hi');

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan(){

  var account = {
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted: 0,
    defaultsToForeclosure: 5,
    forclosed: false
  };

  function missPayment(){
    account.defaulted++;
    if(account.defauled >= account.defaultsToForeclosure){
      account.forclosed = true;
    }
  }

  return {
    getBalance: function(){
      return account.balance;
    },
    receivePayment: function(amount){
      if(amount < account.monthlyPayment){
        missPayment();
        return account.balance - amount;
      }
    },
    getMonthlyPayment: function(){
      return account.monthlyPayment;
    },
    isForeclosed: function(){
      return account.forclosed;
    }
  };
}

stevesLoan = loan();

function borrower(loan){
  var account = {
    monthlyIncome: 1350,
    funds: 2800,
    loan: loan
  };


}