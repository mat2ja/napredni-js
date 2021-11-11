import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  komentari = [
    {autor:'Marko',komentar:'Neki komentar', vrijeme:'6. 4. 2017 16:00'},
    {autor:'Ivan',komentar:'Još neki komentar', vrijeme:'7. 4. 2017 16:00'},
    {autor:'Petra',komentar:'Neki komentar 2', vrijeme:'8. 4. 2017 16:00'},
    {autor:'Anja',komentar:'Neki komentar 3', vrijeme:'9. 4. 2017 16:00'},
    {autor:'Tomislav',komentar:'Neki komentar 4', vrijeme:'10. 4. 2017 16:00'},
    {autor:'Jana',komentar:'Neki komentar 5', vrijeme:'11. 4. 2017 16:00'}
  ];

  new = {
    autor:'',
    komentar:'',
    vrijeme:null
  };

  constructor() { }

  ngOnInit() {
  }



  add(){

    console.log(this.new);
    this.new.vrijeme=new Date();
    this.komentari.push(this.new);
    this.new={autor:'',vrijeme:'', komentar:''};

  }


}
