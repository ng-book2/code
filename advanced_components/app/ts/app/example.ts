/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

/*
 * We've got a ton of examples in this project. This interface defines the
 * structure of a single example.
 */
export interface ExampleDef {
  label: string;  // link label
  name: string;   // route name of the example
  path: string;   // route path
  component: any; // component class
  dev?: boolean;  // is it an intermediate step?
}

