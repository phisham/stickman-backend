import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http:HttpClient) { }
  s_date:any;
  e_date:any;
  data:any=[];
  ngOnInit(): void {
    this.http.get('https://backend-stickman.vercel.app/collect').subscribe((resp:any)=>{
        this.data=resp;
    })
  }


  sdate(ev:any){
    this.s_date=ev.target.value;
  }
  edate(ev:any){
    this.e_date=ev.target.value;
  }

  filter(){
    let d={"sdate":this.s_date,"edate":this.e_date};
    this.http.post('https://backend-stickman.vercel.app/date',d).subscribe((data:any)=>{
      console.log(data);
      this.data=data;
    })
  }
  reset(){
    this.http.get('https://backend-stickman.vercel.app/collect').subscribe((resp:any)=>{
        this.data=resp;
    })
  }
}
