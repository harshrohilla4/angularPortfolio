import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
      
  }
  qualifications=[
    {id:1,title:"Bachelors of Technology",school:"Netaji subhas university of technology",major:"Electrical Engineering",years:"2019-2023",image:"/assets/images/Nsut.png"},
    {id:2,title:"Cbse 12th",school:"Maharaja Agarsain Public School",major:"PCM with CS",years:"2016-2018",image:"/assets/images/Mapslogo.jfif"}
  ];

}
