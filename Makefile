# ────────────────────────────────────────────────
#  Makefile — Lucas Paiva Portfolio
# ────────────────────────────────────────────────

COMPOSE       = docker compose
DEV_FILE      = -f docker-compose.yml
PROD_FILES    = -f docker-compose.yml -f docker-compose.prod.yml

.PHONY: up down prod-up prod-down logs restart build

## Sobe o container em modo dev (porta exposta via .env APP_PORT)
up:
	$(COMPOSE) $(DEV_FILE) up -d --build

## Derruba o container dev
down:
	$(COMPOSE) $(DEV_FILE) down

## Sobe em modo produção (sem porta exposta, usa rede proxy externa)
prod-up:
	$(COMPOSE) $(PROD_FILES) up -d --build

## Derruba o container de produção
prod-down:
	$(COMPOSE) $(PROD_FILES) down

## Reinicia o container dev
restart: down up

## Rebuilda a imagem sem subir
build:
	$(COMPOSE) $(DEV_FILE) build

## Segue os logs do container
logs:
	$(COMPOSE) $(DEV_FILE) logs -f
