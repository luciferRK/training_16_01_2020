import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Shopee';
  imgname = "logo"   //image name without extension use the vraiable in image tag to use it

  datevar = new Date();
  
  vari :HTMLElement=document.getElementById("IDname");

  ngOnInit(){
   this.vari.style.color = red;
  }


  changeImage(){
    if(this.imgname=="logo"){
      this.imgname="img-01"
    }
    else{
      this.imgname="logo"
    }
  }

  

  
}
