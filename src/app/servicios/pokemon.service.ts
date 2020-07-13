import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
    console.log('Servicio iniciado');

  }

  getQuery(query: string){
    const url = `https://pokeapi.co/api/v2/${query}`;

    return this.http.get(url);
  }

  obtenerPokemons(desde: number, limite: number){
    return this.getQuery(`pokemon?offset=${desde}&limit=${limite}`)
              .pipe(map( (data: any) => {
                  return data.results;
              }));
  }

  obtenerPokemon(id: number){
    return this.getQuery(`pokemon/${id}`);

  }

  obtenerNombrePokemon(termino: string){
    return this.getQuery(`pokemon/${termino}`);

  }

  obtenerInformacionPokemon(id: number){
    return this.getQuery(`pokemon-species/${id}`)
      .pipe(map( (data: any) => {
        return data.flavor_text_entries;
      }));
  }
}
