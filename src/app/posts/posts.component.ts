import { Component, OnInit } from "@angular/core";
import { PostService } from "./posts.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  filterpost = '';
  filterdescrip = '';
  filterdeveloper = '';
  filterfecha = '';
  filterconsole = '';

  public page: number;

  inmu = [];
  consolas = [];
  developer = [];
  constructor(
    private data: PostService,
    
  ) { }

  getInmu(){
    this.data.getDatos().subscribe((response)=> {
    this.inmu = response["videogames"];
   //console.log(this.inmu);
    });
   }

   getConsola(){
    this.data.getConsolas().subscribe((response)=> {
    this.consolas = response["consoles"];
   //console.log(this.consolas);
    });
   }

   getDevelop(){
    this.data.getDevelopers().subscribe((response)=> {
    this.developer = response["developers"];
   //console.log(this.developer);
    });
   }

  ngOnInit() {
    this.getInmu();
    this.getConsola();
    this.getDevelop();
  }
}

