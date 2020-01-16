import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  @Input() Ads
  @Output() Event = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  Register(){
    this.Event.emit(this.Ads+ "Registered")
  }

}
