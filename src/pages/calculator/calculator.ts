import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-calculator',
	templateUrl: 'calculator.html'
})
export class CalculatorPage {
    total : number = 0 ;
    firstNumber : any  ;
    secondNumber : any  ;
	constructor(public navCtrl: NavController) { }

	addThemFunction () {
	    let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
	    let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
	    this.total = (firstNumber * secondNumber)/100 ;
	    console.log("clicked!");
  	}
	getInstantTotal() {
    	let  firstNumber = this.firstNumber ? parseFloat(this.firstNumber) : 0 ;
    	let  secondNumber = this.secondNumber ? parseFloat(this.secondNumber) : 0;
        return (firstNumber * secondNumber)/100 ;
  	}
}
