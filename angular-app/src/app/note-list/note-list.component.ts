import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.notes.subscribe(
      data => this.notes = data
    );
    this._noteService.retrieveAll();
  }

  

}
