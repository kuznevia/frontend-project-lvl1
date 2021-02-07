install: # install npm
	npm install

brain-games: # run brain-games
	node bin/brain-games.js

publish: #publish brain-games
	npm publish --dry-run
	
lint:#initializing linter
	npx eslint .

lintfix:#fixing linter
	npx eslint . --fix