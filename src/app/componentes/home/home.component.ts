import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  listaPokemon: any[] = [];
  desde = 0;
  limite = 100;

  constructor(private pokemonS: PokemonService) {
    this.getPokemon(this.desde, this.limite);
  }

  ngOnInit(): void {
  }

  getPokemon(desde: number, limite: number){
    this.pokemonS.obtenerPokemons(desde, limite)
        .subscribe(res => {
          this.listaPokemon = res;
        });
  }

}
