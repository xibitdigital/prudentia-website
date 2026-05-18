PRECOMMIT_UTILS=pre-commit

.PHONY: install
install: ## Install dependencies for pre-commit
	brew install ${PRECOMMIT_UTILS}
	pre-commit install

.PHONY: local-ci
local-ci:
	pre-commit run --all-files

.PHONY: serve
serve:
	npm run watch:css & python3 -m http.server 8000 --directory public; kill %1
