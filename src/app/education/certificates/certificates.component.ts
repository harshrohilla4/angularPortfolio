import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit{
constructor(){}
ngOnInit(): void {
    
}
certificates=[
  {id:1,name:"React-The Complete Guide",author:"Maximillian Schwartzmuller",image:"/assets/images/react-course.jpg",link:"https://www.udemy.com/share/101Way3@zEqNkfMEVFNuVJ-_35vQMPqBCVAnuLlQZxC-jbynJ0_onAukX6OE654waLLsSuqaWw==/"},
  {id:2,name:"Progressive Web Apps(PWA)-The Complete Guide",author:"Maximillian Schwartzmuller",image:"/assets/images/pwa-course.jpeg",link:"https://www.udemy.com/share/101F403@BAhAyBjPuQGQwF3kuk77t2bxkpyIrSBbX2lfd8jMtyd0ffulzj9da2vu1tj7d1xkQQ==/"},
  {id:3,name:"The Complete Web Developmet Bootcamp",author:"Angela Yu",image:"/assets/images/webd-course.jpeg",link:"https://www.udemy.com/share/101qYw3@rs4J62Xnqsm2tO_Js3djcDI0ehs9f_6o1RyR3T9HkaQRGkmTU1yX684Fy5rxPXIIwQ==/"},
  {id:4,name:"C++ Data Structures and Algorithms",author:"Ankush Singla",image:"/assets/images/dsa2-img.png",link:"https://www.codingninjas.com/courses/c-plus-plus-data-structures-and-algorithms?pageGroup="},
];
}
