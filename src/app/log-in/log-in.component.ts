import * as core from '@angular/core';

@core.Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements core.OnInit {

  constructor() { }

  ngOnInit() {
  }

  popupLink(){
    let modal: HTMLElement = document.getElementById("forgot_password");
    modal.setAttribute("style","display:block");
    let elem: HTMLElement = document.getElementById("over");
    elem.setAttribute("style","display:block");
  }
}
