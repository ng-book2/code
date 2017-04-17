#!/bin/bash -x

function rename_angular_imports() {
   FOLDER=$1
   for f in `find ${FOLDER} | grep -E '.(ts|js)$'`; do
       echo $f
       perl -pi -e 's#angular2/core#\@angular/core#g' $f
       perl -pi -e 's#angular2/compiler#\@angular/compiler#g' $f
       perl -pi -e 's#angular2/common#\@angular/common#g' $f
       perl -pi -e 's#angular2/platform/browser#\@angular/platform-browser-dynamic#g' $f
       perl -pi -e 's#angular2/platform/server#\@angular/platform-server#g' $f
       perl -pi -e 's#angular2/testing#\@angular/core/testing#g' $f
       perl -pi -e 's#angular2/upgrade#\@angular/upgrade#g' $f
       perl -pi -e 's#angular2/http#\@angular/http#g' $f
       perl -pi -e 's#angular2/router#\@angular/router#g' $f
       perl -pi -e 's#angular2/platform/testing/browser#\@angular/platform-browser-dynamic/testing#g' $f
   done
}

function upgrade_tsd_to_typings() {
  if [ -d "typings" ]; then
    # remove tsd 
    perl -i -pe 's#^\s+"tsd":.*##s' package.json
    rm -rf ./typings
    npm install typings --save
    ./node_modules/.bin/typings init --upgrade
    rm tsd.json
    ./node_modules/.bin/typings install
  fi
}

function upgrade_tsconfig_paths_to_typings() {
  if [ -f tsconfig.json ]; then
    echo "upgrading tsconfig.json"

    # TODO:
    # deal w/ 
    # - "node_modules/angular2/ts/typings/node/node.d.ts",
    # - "node_modules/angular2/typings/browser.d.ts",
    #
    # perl -pi -e 's#node_modules/angular2/ts/typings/node/node.d.ts##g' tsconfig.json
    perl -pi -e 's#typings/tsd.d.ts#typings/main.d.ts#g' tsconfig.json

    # add the excludes
  fi
}

function use_ts_helpers() {
  perl -pi -e 's#"noEmitHelpers": false#"noEmitHelpers": true#g' tsconfig.json

  VENDOR_FILE=`find {app,test,lib} | grep vendor.ts | head -n 1`
  if grep -q ts-helpers $VENDOR_FILE
  then
      true
  else
      echo "import 'ts-helpers';" >> $VENDOR_FILE
  fi
}

function fix_ngfor_vars() {
 FOLDER=$1
 for f in `find ${FOLDER} | grep -E '.(ts|js)$'`; do
   # *ngFor="#thread of threads" becomes -> *ngFor="let thread of threads"
   # \x27 and \x22 are unicode for single and double quote
   perl -pi -e 's/\*(\w+)=([\x27\x22])#/*\1=\2let /g' $f
 done
}    

function fix_polyfills() {
   # remove es6-shim / es6-promise / reflect-metadata in favor of core-js

   FOLDER=$1
   for f in `find ${FOLDER} | grep -E '.(ts|js)$'`; do
       echo $f
       perl -pi -e 's#es6-shim#core-js/es6#g' $f
       perl -pi -e 's#es6-promise#core-js/es6#g' $f
       perl -pi -e 's#es7-reflect-metadata/dist/browser#core-js/es7/reflect#g' $f
   done

   perl -i -pe 's#^\s+"es6-promise":.*##s' package.json
   perl -i -pe 's#^\s+"es6-shim":.*##s' package.json
   perl -i -pe 's#^\s+"es7-reflect-metadata":.*##s' package.json
   perl -i -pe 's#^\s+"reflect-metadata":.*##s' package.json
}

# rename_angular_imports "app";
# rename_angular_imports "test";
# fix_ngfor_vars "app";
# rename_angular_imports ". -depth 1";
# fix_ngfor_vars ". -depth 1";
fix_polyfills "app test lib";
fix_polyfills ". -depth 1";

# upgrade_tsd_to_typings
# use_ts_helpers

