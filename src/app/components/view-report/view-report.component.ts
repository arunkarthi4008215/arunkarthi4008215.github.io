import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultySearch } from 'app/interfaces/facultySearch';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html'
})
export class ViewReportComponent implements OnInit {
  
  
  title: any;
  chart: any;
  public isFilter:boolean = false;
  public facultySearch:FacultySearch = {} as FacultySearch

  constructor(private actRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.facultySearch.department = "0";
    this.title = this.actRoute.snapshot.queryParams.title;

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: [
          'Trained',
          'Not-Tranied'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [85, 15],
          backgroundColor: [
            "#3ec556",
            "#d7d7d7"
          ],
          hoverOffset: 4
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips:{
          enabled:true
        }
      }
    });
  }
  
  public showFilter(){
    if(this.isFilter)
    this.isFilter = false
    else
    this.isFilter = true
  }

  public viewEmployeeReport(){
    
    this.router.navigateByUrl('app/view-employee-report')
  }

  }

