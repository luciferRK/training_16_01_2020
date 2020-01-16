import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Shopee';
  imgname = "logo"   //image name without extension use the vraiable in image tag to use it

  datevar = new Date();
  

  ngOnInit(){
  }


  changeImage(){
    if(this.imgname=="logo"){
      this.imgname="img-01"
    }
    else{
      this.imgname="logo"
    }
    
    document.getElementById("IDname").style.color ='red'
  }

  Register(event){
    alert(event)
  }

  

  
}
