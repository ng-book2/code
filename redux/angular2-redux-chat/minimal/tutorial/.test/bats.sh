#!/usr/bin/env bats

@test "redux1.js works" {
  run bash -c "./node_modules/.bin/babel-node redux1.js"
  [ "$status" -eq 0 ]
  [ "${lines[0]}" = "true" ]
}

@test "redux2.js works" {
  run bash -c "./node_modules/.bin/babel-node redux2.js"
  EXPECTED="$(cat <<'EOF'
1
2
3
true
EOF
)"
  [ "$status" -eq 0 ]
  [ "$output" = "$EXPECTED" ]
}

@test "identity-reducer.js works" {
  run bash -c "./node_modules/.bin/babel-node identity-reducer.js"
  EXPECTED="$(cat <<'EOF'
0
EOF
)"
  [ "$status" -eq 0 ]
  [ "$output" = "$EXPECTED" ]
}

@test "adjusting-reducer.js works" {
  run bash -c "./node_modules/.bin/babel-node adjusting-reducer.js"
  EXPECTED="$(cat <<'EOF'
1
2
99
EOF
)"
  [ "$status" -eq 0 ]
  [ "$output" = "$EXPECTED" ]
}

@test "adjusting-reducer-switch.js works" {
  run bash -c "./node_modules/.bin/babel-node adjusting-reducer-switch.js"
  EXPECTED="$(cat <<'EOF'
1
2
99
100
EOF
)"
  [ "$status" -eq 0 ]
  [ "$output" = "$EXPECTED" ]
}

@test "plus-action.js works" {
  run bash -c "./node_modules/.bin/babel-node plus-action.js"
  EXPECTED="$(cat <<'EOF'
10
9003
1
EOF
)"
  [ "$status" -eq 0 ]
  [ "$output" = "$EXPECTED" ]
}

@test "action-arguments works" {
  run bash -c "./node_modules/.bin/babel-node action-arguments.js"
  EXPECTED="$(cat <<'EOF'
1
2
99
EOF
)"
  [ "$status" -eq 0 ]
  [ "$output" = "$EXPECTED" ]
}

@test "minimal-store works" {
  run bash -c "./node_modules/.bin/babel-node minimal-store.js"
  EXPECTED="$(cat <<'EOF'
null
1
2
1
EOF
)"
  [ "$status" -eq 0 ]
  [ "$output" = "$EXPECTED" ]
}

