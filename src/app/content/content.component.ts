import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongkickService } from '../services/songkick.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  artistName;
  objetTest;

  constructor(private route: ActivatedRoute, private service: SongkickService) { }

    search() {
	    this.service.apiCall(this.artistName).subscribe((data: any) => {
	    	console.log("dans la fonction " + data);
	      this.objetTest = data;
	     });
  	}

  	

  ngOnInit() {
  	this.artistName = this.route.snapshot.params['id'];
  	console.log(this.artistName)
  	this.search();
  	console.log(this.objetTest)
  }

}
