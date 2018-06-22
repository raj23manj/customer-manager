import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  arrayIndex: number;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
                                  .subscribe((params: Params) => {
                                    this.arrayIndex = params['id']
                                  });
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
