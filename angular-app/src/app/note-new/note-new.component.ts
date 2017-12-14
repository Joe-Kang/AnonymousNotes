import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  note = {
    text: ''
  };

  
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._noteService.createNote(this.note);
    this.note = { text: ''};
  }

}

