import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shopee';
  ngOnInit(){

  }

  imgname = "logo"   //image name without extension use the vraiable in image tag to use it


  changeImage(){
    if(this.imgname=="logo"){
      this.imgname="img-01"
    }
    else{
      this.imgname="logo"
    }
  }
}
