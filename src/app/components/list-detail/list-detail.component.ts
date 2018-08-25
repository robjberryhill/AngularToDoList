import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  list: List;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getListDetailId();
  }

  getListDetailId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.listService.getListId(id)
    .subscribe(list => this.list = list);
  }

}
