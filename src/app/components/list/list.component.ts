import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { ListService } from '../../services/list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List[];
  dataListService: ListService;
  selectedListItem: List;

  constructor(private listService: ListService) {
    
  }

  ngOnInit(): void {
    this.getList();
  }

  onSubmit(data) {
    this.list.push(data);
  }

  getList(): void {
    this.listService.getListItems().subscribe(list => this.list = list);
  }

}
