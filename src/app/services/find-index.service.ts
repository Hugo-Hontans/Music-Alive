import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindIndexService {

	scrollBoolean = false;
	index;
	doCheckCarteMap = false;
	serviceIndex;
	scrollElementBoolean=false;
	showScrollMapButton=false;
	memorizeIndex(memo){
		this.serviceIndex=memo;
	}

  constructor() { }

}
