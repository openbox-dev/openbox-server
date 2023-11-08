install:
	@echo "Installing dependencies..."
	@echo "Streamez Asinine"
	@echo "=== SCSS ==="
	@npm install sass
	@echo "=== THREE ==="
	@npm install three
	@npm install

start:
	@npm run dev

migrate:
	@echo "Installing prisma and migrating database models..."
	@npm install prisma
	@npx prisma migrate dev
	@npx prisma studio