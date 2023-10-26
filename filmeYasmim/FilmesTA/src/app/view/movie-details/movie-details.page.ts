import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbapiService } from 'src/app/service/omdbapi.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  info : any;

  constructor(private actRoute : ActivatedRoute, private omdbapi : OmdbapiService) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.omdbapi.getById(id).subscribe(result => this.info = result);

}
}