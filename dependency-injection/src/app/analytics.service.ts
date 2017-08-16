import { Injectable } from '@angular/core';
import { Metric, AnalyticsImplementation } from './analytics.interface';
@Injectable()

export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) {
  }
  recordEvent(metric: Metric): void {
    this.implementation.recordEvent(metric)
  }

}
