import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list: List[] = [
    {
      id: 0,
      name: 'Item01',
      details: 'Do these things.'
    },
    {
      id: 1,
      name: 'Item02',
      details: 'Do these things.'
    },
    {
      id: 2,
      name: 'Item03',
      details: 'Do these things.'
    }
  ];

  getListItems = (): Observable<List[]> => {
    return of(this.list);
  };

  getListId(id: number): Observable<List> {
    return of (this.list.find(list => list.id === id));
  }

  constructor() { }
}
