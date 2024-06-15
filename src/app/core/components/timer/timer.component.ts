import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  interval,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnInit, OnChanges {
  private timeMin = 0;

  private timeSec = 0;

  timerElement!: string;

  private timer = interval(1000);

  sub!: Subscription;

  reset$ = new Subject();

  @Input() isStopTimer: boolean = false;

  constructor() {
    console.log('isStopTimer ngOnInit', this.isStopTimer);
    this.init();
  }

  ngOnInit() {}

  init() {
    this.sub = this.timer.pipe(takeUntil(this.reset$)).subscribe((val) => {
      console.log('timer', val);
      this.updateCounter();

      if (this.isStopTimer) {
        this.reset$.next(void 0);
        this.timerElement = '0';
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isStopTimer']) {
      console.log('ngOnChanges isStopTimer', this.isStopTimer);
      if (this.isStopTimer) {
        this.stopTimer();
      }
    }
  }

  private stopTimer() {
    this.reset$.next(0);
    this.timerElement = '00:00';
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.timeMin = 0;
    this.timeSec = 0;
  }

  updateCounter() {
    const min = this.timeMin < 10 ? `0${this.timeMin}` : `${this.timeMin}`;
    const sec = this.timeSec < 10 ? `0${this.timeSec}` : `${this.timeSec}`;

    this.timerElement = `${min}:${sec}`;

    this.timeSec %= 60;

    this.timeSec = this.timeSec + 1;

    if (this.timeSec > 59) {
      console.log('timeMin', this.timeMin);
      this.timeMin++;
      this.timeSec = 0;
    }
  }
}
