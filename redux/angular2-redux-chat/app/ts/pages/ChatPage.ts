/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component } from '@angular/core';
import ChatNavBar from '../containers/ChatNavBar';
import ChatThreads from '../containers/ChatThreads';
import ChatWindow from '../containers/ChatWindow';

/**
 * ChatPage is the page which shows our chat view. In a larger app we'd
 * have several pages.  
 */
@Component({
  selector: 'chat-page',
  template: `
  <div>
    <chat-nav-bar></chat-nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `
})
export default class ChatPage {
}
