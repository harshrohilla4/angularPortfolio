import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
 constructor(){}
 ngOnInit(){

 }
 projects=[
  {id:1,title:"Memories App",subtitle:"A progressive webapp",description:"A PWA built with HTML,CSS,JS with features like push notifications and app manifestations which allow users to create a memory and review it later"},
  {id:2,title:"Chat App",subtitle:"Using ReactJS",description:"A realtime chat app which allows user to signup/login and chat with others"},
  {id:3,title:"Covid-19 Tracker",subtitle:"Using ReactJS and GraphQl",description:"A realtime live covid-19 tracker which keeps updating number of active cases around the globe"}
 ];
}
