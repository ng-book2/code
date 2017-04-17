#!/usr/bin/env bats
DIR=$(dirname $BATS_TEST_FILENAME)

load "${NGBOOK_ROOT}/scripts/bats/fullstack.bats"
load '/usr/local/lib/bats-support/load.bash'
load '/usr/local/lib/bats-assert/load.bash'

@test "how_angular_works/inventory_app e2e passses" {
  cd $DIR
  run ./node_modules/.bin/protractor
  assert_output --partial 'SUCCESS'
}

setup() {
  cd $DIR
  kill_by_grep "concurrent"
  npm run go 3>- &
  true
}

teardown() {
  cd $DIR
  kill_by_grep "concurrent"
  true
}
