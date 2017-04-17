#!/usr/bin/env bats
DIR=$(dirname $BATS_TEST_FILENAME)

load "${NGBOOK_ROOT}/scripts/bats/fullstack.bats"
load '/usr/local/lib/bats-support/load.bash'
load '/usr/local/lib/bats-assert/load.bash'

@test "angular2_reddit e2e passses" {
  cd $DIR
  run_ng_e2e $TEST_TMP_DIR
  run cat ${TEST_TMP_DIR}/log.txt
  assert_output --partial 'All end-to-end tests pass.'
}

setup() {
  cd $DIR
  TEST_TMP_DIR="$(mktemp -d -t fullstack)"
  kill_ng_cli
  ng serve 3>- &
  true
}

teardown() {
  cd $DIR
  kill_ng_cli
  # temp_del "$TEST_TMP_DIR"
  true
}
