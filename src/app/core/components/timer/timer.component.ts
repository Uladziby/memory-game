import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnChanges {
  private timeMin = 0;

  private timeSec = 0;

  private timer = interval(1000);

  timerElement: string = '00:00';

  sub!: Subscription;

  reset$ = new Subject();

  @Input() isStopTimer: boolean = false;

  @Output() setFinalTime = new EventEmitter<string>();
  constructor(private cdr: ChangeDetectorRef) {
    this.init();
  }

  init() {
    this.sub = this.timer.pipe(takeUntil(this.reset$)).subscribe(() => {
      this.updateCounter();
      this.cdr.markForCheck();
      if (this.isStopTimer) {
        this.reset$.next(void 0);
        this.timerElement = '0';
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isStopTimer']) {
      if (this.isStopTimer) {
        this.stopTimer();
        this.setFinalTime.emit(this.timerElement);
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

  private updateCounter() {
    const min = this.timeMin < 10 ? `0${this.timeMin}` : `${this.timeMin}`;
    const sec = this.timeSec < 10 ? `0${this.timeSec}` : `${this.timeSec}`;

    this.timerElement = `${min}:${sec}`;

    this.timeSec %= 60;

    this.timeSec = this.timeSec + 1;

    if (this.timeSec > 59) {
      this.timeMin++;
      this.timeSec = 0;
    }

    this.setFinalTime.emit(this.timerElement);
  }
}
