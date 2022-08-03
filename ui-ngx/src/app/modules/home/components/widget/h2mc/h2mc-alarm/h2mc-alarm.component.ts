import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'tb-h2mc-alarm',
  templateUrl: './h2mc-alarm.component.html',
  styleUrls: ['./h2mc-alarm.component.scss']
})
export class H2mcAlarmComponent implements OnInit, AfterViewInit {

  @Input() entityList: any;
  @Input() checked: boolean = true;

  private yellow_src = '../assets/alarm_yellow.png';
  private red_src = '../assets/alarm_red.png';
  public current_src = '../assets/alarm_red.png';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }


  goDeviceDetail(entityId: string): void {
    const url = '/devices/' + entityId;
    this.router.navigate([url]);
  }

}
