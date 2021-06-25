import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here are some pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://media4.giphy.com/media/fpO7QkiPMFKSmdupRD/giphy.gif?cid=ecf05e477caot031i7iu4y9g0nt0cw8u5day2t5vonzfhdyc&rid=giphy.gif&ct=g';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}