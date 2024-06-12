import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IDuAn } from '../idu-an';
import { DulieuService } from '../dulieu.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink],
  templateUrl: './duan-list.component.html',
  styleUrl: './duan-list.component.css'
})
export class DuanListComponent implements OnInit{
  list_du_an:IDuAn[]=[];
  constructor(private httpSV:DulieuService, private  route:Router){}
  ngOnInit():void {
   this.load_list();
    }
    // fetch(`http://localhost:3000/du_an`)
    // .then (res => res.json())
    // .then (data =>{
    //   this.list_du_an = data;
    // })
  load_list(){
    this.httpSV.layDuAn().subscribe((data:any)=>{
      this.list_du_an=data as IDuAn[];
    })
  }

  xoaduan(id:any  ){
    console.log(id );
    this.httpSV.xoaDuAn(id).subscribe((data1 :any)=>{
    console.log(data1);

    this.load_list();

  })
}
}
