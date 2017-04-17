#!/usr/bin/env bats
DIR=$(dirname $BATS_TEST_FILENAME)

load "${NGBOOK_ROOT}/scripts/bats/fullstack.bats"
load '/usr/local/lib/bats-support/load.bash'
load '/usr/local/lib/bats-assert/load.bash'

@test "hybrid e2e tests pass" {
  cd $DIR
  run ./node_modules/.bin/protractor
  assert_output --partial 'SUCCESS'
}

setup() {
  cd $DIR
  kill_by_grep "live-server"
  npm run e2e:serve 3>- &
  sleep 30
  true
}

teardown() {
  cd $DIR
  kill_by_grep "live-server"
  true
}
