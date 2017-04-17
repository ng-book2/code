/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * A User represents an agent that sends messages
 */
export interface User {
  id: string;
  name: string;
  avatarSrc: string;
  isClient?: boolean;
}
