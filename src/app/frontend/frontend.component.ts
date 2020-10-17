import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  arrData: any;
  arrData1: any;

  ngOnInit(): void {
    this.httpService.get('./assets/mockData.json').subscribe(
      data => {
        this.arrData = data;
        this.arrData1 = this.arrData.filter(data => data.type === "Front End");
       // console.log(this.arrData1);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
  );
  }

  public showDescription(data): void {
    this.arrData1 = this.arrData.filter(data => data.type === "Front End");
    const itemIndex = this.arrData1.findIndex(item => item.id === data.id);
    this.arrData1[itemIndex] = {"description": this.arrData1[itemIndex].description, "id": this.arrData1[itemIndex].id};
    //console.log( this.arrData1);
  }

  public showMainContent(data): void {
    this.arrData1 = this.arrData.filter(data => data.type === "Front End");
    const itemIndex = this.arrData1.findIndex(item => item.id === data.id);
    this.arrData1[itemIndex] =
    { "id": this.arrData1[itemIndex].id,
      "name": this.arrData1[itemIndex].name,
      "category": this.arrData1[itemIndex].category,
      "latestVersion": this.arrData1[itemIndex].latestVersion,
      "documentation": this.arrData1[itemIndex].documentation
    };
   // console.log(this.arrData1);
  }
}
