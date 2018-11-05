import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindIndexService {

	scrollBoolean = false;
	index;
	doCheckCarteMap = false;

  constructor() { }

}
