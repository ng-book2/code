/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  Inject,
  Component
} from '@angular/core';
import { AppStore } from '../app-store';
import { Store } from 'redux';
import {
  Thread
} from '../models';
import {
  ThreadActions
} from '../actions';
import {
  AppState,
  getCurrentThread,
  getAllThreads
} from '../reducers';
import ChatThread from '../components/ChatThread';

/**
 * ChatThreads shows the list of current threads
 */
@Component({
  selector: 'chat-threads',
  template: `
  <!-- conversations -->
  <div class="row">
    <div class="conversation-wrap">
      <chat-thread
           *ngFor="let thread of threads"
           [thread]="thread"
           [selected]="thread.id === currentThreadId"
           (onThreadSelected)="handleThreadClicked($event)">
      </chat-thread>
    </div>
  </div>
  `
})

export default class ChatThreads {
  threads: Thread[];
  currentThreadId: string;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState() {
    let state = this.store.getState();

    // Store the threads list
    this.threads = getAllThreads(state);

    // We want to mark the current thread as selected,
    // so we store the currentThreadId as a value
    this.currentThreadId = getCurrentThread(state).id;
  }

  handleThreadClicked(thread: Thread) {
    this.store.dispatch(ThreadActions.selectThread(thread));
  }
}
