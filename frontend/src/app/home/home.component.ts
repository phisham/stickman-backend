import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  data:any=[];
  
  number:any;
  name_:any;
  tot_data:any;
  num_ev:any;
  show2:any=false;
  ngOnInit(): void {
  }

  name(ev:any){
    this.name_=ev.target.value;
  }
  storeNumber(ev:any){
    this.number=ev.target.value;
    this.num_ev=ev;
  }

  add(){
    
    
    let data={"name":this.name_ , "number":this.number}
    this.http.post('https://backend-stickman.vercel.app/created',data).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.token){
        this.data.push({"number":this.number,"token":resp.token});
      }
      else
        this.show2=true;
      
      this.num_ev.target.value=null;

    })

    
  }
  close(){
    this.show2=false;
  }

  reload(){
      window.location.reload();
  }
}
