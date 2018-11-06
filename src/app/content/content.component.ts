import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SongkickService } from '../services/songkick.service';
import { NgForm } from '@angular/forms';


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
  affichageTitrePourLocation=false;
  
  today=new Date();
  dd=this.today.getDate();
  mm=this.today.getMonth()+1;
  yyyy=this.today.getFullYear();
  event;



  constructor(private route: ActivatedRoute, private service: SongkickService) {
    this.event = "anytime";
   }

    search(variable) {
      switch (variable) {
        case 'anytime':
            this.service.apiCall(this.artistName).subscribe((data: any) => {
            this.objetTest = data;
            if(this.objetTest.resultsPage.totalEntries != 0){
              this.affichage = true;
            }
            else { this.affichage = false;}
           });     
        break;

        case 'today':
          let stringdd;
          let stringmm;
          this.dd=this.today.getDate();
          this.mm=this.today.getMonth()+1;
          this.yyyy=this.today.getFullYear();
          if (this.dd<10){stringdd="0" + this.dd.toString()} else {stringdd=this.dd};
          if (this.mm<10){stringmm="0"+this.mm.toString()} else {stringmm=this.mm};
          let minDate= this.yyyy + "-" + stringmm + "-" + stringdd;
          let maxDate= this.yyyy + "-" + stringmm + "-" + stringdd;

          this.service.apiCall(this.artistName, minDate, maxDate).subscribe((data: any) => {
            this.objetTest = data;
            if(this.objetTest.resultsPage.totalEntries != 0){
              this.affichage = true;   
            }
            else { this.affichage = false;}
            });     
        break;

          case 'tomorrow':
            let tomorrow=new Date(this.today);
            tomorrow.setDate(this.today.getDate()+1);
            this.dd=tomorrow.getDate();
            this.mm=tomorrow.getMonth()+1;
            this.yyyy=tomorrow.getFullYear();

            if (this.dd<10){stringdd="0" + this.dd.toString()} else {stringdd=this.dd};
            if (this.mm<10){stringmm="0"+this.mm.toString()} else {stringmm=this.mm};
            minDate= this.yyyy + "-" + stringmm + "-" + stringdd;
            maxDate= this.yyyy + "-" + stringmm + "-" + stringdd;

            this.service.apiCall(this.artistName, minDate, maxDate).subscribe((data: any) => {
              this.objetTest = data;
              if(this.objetTest.resultsPage.totalEntries != 0){
                this.affichage = true;   
              }
              else { this.affichage = false;}
              });     
          break;

          case 'thisWeek':
            let week=new Date(this.today);
            week.setDate(this.today.getDate()+7);
            let newdd=week.getDate();
            let newmm=week.getMonth()+1;
            let newyyyy=week.getFullYear();
            let stringnewdd="";
            let stringnewmm="";
            if (newdd<10){stringnewdd="0" + newdd.toString()} else {stringnewdd=newdd.toString()};
            if (newmm<10){stringnewmm="0" + newmm.toString()} else {stringnewmm=newmm.toString()};
            if (this.dd<10){stringdd="0" + this.dd.toString()} else {stringdd=this.dd};
            if (this.mm<10){stringmm="0"+this.mm.toString()} else{stringmm=this.mm};
            minDate= this.yyyy + "-" + stringmm + "-" + stringdd;
            maxDate= newyyyy + "-" + stringnewmm + "-" + stringnewdd;
            this.service.apiCall(this.artistName, minDate, maxDate).subscribe((data: any) => {
              this.objetTest = data;
              if(this.objetTest.resultsPage.totalEntries != 0){
                this.affichage = true;   
              }
              else { this.affichage = false;}
              });     
          break;
        
          case 'thisMonth':
            let month=new Date(this.today);
            month.setDate(this.today.getDate()+30);
            newdd=month.getDate();
            newmm=month.getMonth()+1;
            newyyyy=month.getFullYear();
            stringnewdd="";
            stringnewmm="";
            if (newdd<10){stringnewdd="0" + newdd.toString()} else {stringnewdd=newdd.toString()};
            if (newmm<10){stringnewmm="0" + newmm.toString()} else {stringnewmm=newmm.toString()};
            if (this.dd<10){stringdd="0" + this.dd.toString()} else {stringdd=this.dd};
            if (this.mm<10){stringmm="0"+this.mm.toString()} else{stringmm=this.mm};
            minDate= this.yyyy + "-" + stringmm + "-" + stringdd;
            maxDate= newyyyy + "-" + stringnewmm + "-" + stringnewdd;
            this.service.apiCall(this.artistName, minDate, maxDate).subscribe((data: any) => {
              this.objetTest = data;
              if(this.objetTest.resultsPage.totalEntries != 0){
                this.affichage = true;   
              }
              else { this.affichage = false;}
              });     
          break;

          case 'next3Months':
            let tmonths=new Date(this.today);
            tmonths.setDate(this.today.getDate()+90);
            newdd=tmonths.getDate();
            newmm=tmonths.getMonth()+1;
            newyyyy=tmonths.getFullYear();
            stringnewdd="";
            stringnewmm="";
            if (newdd<10){stringnewdd="0" + newdd.toString()} else {stringnewdd=newdd.toString()};
            if (newmm<10){stringnewmm="0" + newmm.toString()} else {stringnewmm=newmm.toString()};
            if (this.dd<10){stringdd="0" + this.dd.toString()} else {stringdd=this.dd};
            if (this.mm<10){stringmm="0"+this.mm.toString()} else{stringmm=this.mm};
            minDate= this.yyyy + "-" + stringmm + "-" + stringdd;
            maxDate= newyyyy + "-" + stringnewmm + "-" + stringnewdd;
            this.service.apiCall(this.artistName, minDate, maxDate).subscribe((data: any) => {
              this.objetTest = data;
              if(this.objetTest.resultsPage.totalEntries != 0){
                this.affichage = true;   
              }
              else { this.affichage = false;}
              });     
          break;

      }
   }

  	

  ngOnInit() {
  	this.route.params.subscribe((params: ParamMap) => {
      this.artistName = params["id"];
      this.search("anytime");
    })
  }


}
