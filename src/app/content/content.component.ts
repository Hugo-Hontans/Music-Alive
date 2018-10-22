import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SongkickService } from '../services/songkick.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  artistName;
  objetTest;
  // boolean pour eviter les erreurs de la console lors du chargement du component
  affichage = false;

  constructor(private route: ActivatedRoute, private service: SongkickService) { }

    search() {
	    this.service.apiCall(this.artistName).subscribe((data: any) => {
	      this.objetTest = data;
        if(this.objetTest.resultsPage.totalEntries != 0){
          this.affichage = true;
        }
        else { this.affichage = false;}
	     });
  	}

  	

  ngOnInit() {
  	this.route.params.subscribe((params: ParamMap) => {
      this.artistName = params["id"];
      this.search();
    })
  }

}
