.PHONY:build

bash:
	docker exec -it odin-next bash

build:
	docker build -t mantiby/odin-next:latest .

push:
	docker push mantiby/odin-next:latest

deploy:
	docker container stop odin-next
	docker container rm odin-next
	docker compose up -d
