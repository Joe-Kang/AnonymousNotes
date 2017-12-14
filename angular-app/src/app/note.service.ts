import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NoteService {

  notes = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  retrieveAll() {
    this._http.get('/all').subscribe(
      (response: any[]) => {
        this.notes.next(response);
      }
    );
  }

  createNote(note) {
    this._http.post('/create', note).subscribe(
      (response: any[]) => {
        this.retrieveAll();
      }
    );
  }

  delete(note) {
    this._http.post('/:id/delete', note).subscribe(
      (response: any[]) => {
        this.retrieveAll();
      }
    )
  }
}

