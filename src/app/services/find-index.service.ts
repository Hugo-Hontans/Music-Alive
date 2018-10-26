import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindIndexService {

	index;
	doCheckCarteMap = false;

  constructor() { }

  elliot(index){
  	return this.index;
  }
}
