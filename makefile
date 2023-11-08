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

prisma:
	@echo "Installing prisma and setting up database"
	@npm install prisma
	@npm install
	@npx prisma migrate dev
	@npx prisma studio