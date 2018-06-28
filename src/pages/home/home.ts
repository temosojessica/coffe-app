import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results = 0;
  name: string;
  value: number;
  whip:boolean;
  choc:boolean;
  Cof:boolean;
  chc:string;
  whp:string;
  cof:string;
  
  constructor(public navCtrl: NavController) {
      
  }
  onReset(){
    this.results = 0;
    this.choc=false;
    this.whip=false;
    this.Cof=false;
    this.name='';
    this.chc='';
    this.whp='';
    this.cof='';
    

  }
  onPlus(){
   this.results +=1;
   console.log(this.results); 
  }
  onMinus(){
    if(this.results > 0)
       this.results -=1;
  console.log(this.results);
  }
  onOrder(){
    this.value = 1;
  }
  onWhip(){
    if(this.whip){
      this.whp = '+Whipped Cream';
    }else{
      this.whp='';
    }}
    onChoc(){
    if(this.choc){
      this.chc = "+Chocolate";
    }else{
      this.chc='';
    }}
    onCof(){
      if(this.Cof){
        this.cof="+ Coffe";
      }else{
        this.cof='';
    }}

  }
