import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractOdoqService} from '../../../shared/service/abstract-odoq.service';

@Component({
  selector: 'app-odoq-list',
  templateUrl: './odoq-list.component.html',
  styleUrls: ['./odoq-list.component.scss']
})
export class OdoqListComponent implements OnInit {

  @Input() service: AbstractOdoqService<any>;

  constructor(private router: Router,
              protected readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  navigateToDetail(o: any) {
    this.router.navigate([`${o.id}`], {relativeTo: this.activatedRoute}).then();
  }

}
