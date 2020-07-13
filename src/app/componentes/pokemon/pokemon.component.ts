import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../servicios/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {

  pokemon: any = {};
  infoPokemon: any = {};
  movimientosPokemon: any[] = [];

  constructor(private pokemonS: PokemonService, private aroute: ActivatedRoute, private router: Router) {
    this.aroute.params.subscribe(info => {
      this.getPokemon(info.id);
      this.getInfoPokemon(info.id);
    });
  }

  ngOnInit(): void {
  }

  getPokemon(id: number){
    this.pokemonS.obtenerPokemon(id)
        .subscribe(data => {
          this.pokemon = data;
        });
  }

  getInfoPokemon(id: number){
     this.pokemonS.obtenerInformacionPokemon(id)
         .subscribe(data => {
           this.infoPokemon = data;
           for (let i = 0; i < 4; i++) {
             this.movimientosPokemon.push(this.pokemon.moves[i]);
           }
          });
  }

  regresar(){
    this.router.navigate(['/home']);
  }

}
