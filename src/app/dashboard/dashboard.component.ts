import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    title ='Data from flickr';
    tag="ecuador";
  private url="https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=16eebc5dba8a6e445aa2fdf076a24f45&tags="+this.tag+"&format=json&nojsoncallback=1&auth_token=72157672471900847-6f3bf33dfd382ecb&api_sig=0c6d58fb1598dcacb792a703b3518953";
   data: any = {};
  heroes: Hero[] = [];


    
  constructor(private heroService: HeroService,
              private http : HttpClient){
              
  }
    

  ngOnInit() {
    this.getHeroes();
    this.getData(); 
    this.getContent();
  }

    getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    getData(){
       return this.http.get(this.url);
       
    }

    getContent(){
        this.getData().subscribe(data=>{
            console.log(data);
            this.data = data;
        })
    }
}