install:
	npm install

dev:
	./node_modules/.bin/webpack-dev-server

test:
	karma start

tree:
	cd .. && tree -I node_modules -A -F angular2-redux-chat

production:
	webpack
  s3cmd sync build/ s3://redux-chat.ng-book.com/
  s3cmd setacl s3://redux-chat.ng-book.com/ --acl-public --recursive

# dev command to build the css 
css:
	mkdir -p tmp
	cat app/css/styles.scss | sed 's/~bootstrap/bootstrap/g' | node-sass --include-path ./node_modules --include-path ./app/css > tmp/styles.css
	cat tmp/styles.css | sed 's/bootstrap-sass\/assets\/fonts/..\/..\/node_modules\/bootstrap-sass\/assets\/fonts/g' > app/css/styles.css

