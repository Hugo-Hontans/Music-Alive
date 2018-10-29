import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SongkickService } from '../services/songkick.service';

@Component({
  selector: 'app-content-location',
  templateUrl: './content-location.component.html',
  styleUrls: ['./content-location.component.css']
})
export class ContentLocationComponent implements OnInit {

	  id;
    objetTest;
    // boolean pour eviter les erreurs de la console lors du chargement du component
    affichage = false;
    affichageTitrePourLocation=true;

  constructor(private route: ActivatedRoute, private service: SongkickService) { }

  search() {
	    this.service.apiCallLocationSearch(this.id).subscribe((data: any) => {
	      this.objetTest = data;
        if(this.objetTest.resultsPage.totalEntries != 0){
          this.affichage = true;
        }
        else { this.affichage = false;}
	     });
  	}

  ngOnInit() {
  	this.route.params.subscribe((params: ParamMap) => {
      this.id = params["id"];
      this.search();
    })
  }

}
