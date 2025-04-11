import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [NgSwitch,CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
// currentUserRole: string='admin'


student= [
  {name: 'uma', "marks": 342 , "result" : "pass"},
  {name: 'rani', "marks": 349 , "result" : "pass"},
  {name: 'sony', "marks": 0 , "result" : "absent"},
  {name: 'priya', "marks": 30 , "result" : "fail"}
]

Orders=[
  {orderno: 1 , "orderdate": "12/4/2024", "customerName": 'raj', "contactno":9552495441 ,"city":'pnne',"orderstatus":'proceede'},
  {orderno: 2 , "orderdate": "15/4/2024", "customerName": 'saomnath', "contactno":9552495412 ,"city":'pnne', "orderstatus":'pending'},
  {orderno: 3 , "orderdate": "16/4/2024", "customerName": 'rakesh', "contactno":9552495450 ,"city":'pnne' , "orderstatus":'cancelled'},
  {orderno: 4 , "orderdate": "19/4/2024", "customerName": 'vijay', "contactno":9552495420 ,"city":'pnne',"orderstatus":'proceede'},
  {orderno: 5 , "orderdate": "18/4/2024", "customerName": 'virat', "contactno":9552495446 ,"city":'pnne',"orderstatus":'proceede'}
]

}
