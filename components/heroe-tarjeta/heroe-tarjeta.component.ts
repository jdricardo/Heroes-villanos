import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  verheroe() {
    this.router.navigate(['/heroe', this.index]);
  }

}
