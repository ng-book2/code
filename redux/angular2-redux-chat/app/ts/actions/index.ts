/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as ThreadActions from './ThreadActions';
import * as UserActions from './UserActions';

// export here for object imports
export {
  ThreadActions,
  UserActions
};

// export here for injecting the dependencies (e.g. at bootstrap)
export default [
  ThreadActions,
  UserActions
];
