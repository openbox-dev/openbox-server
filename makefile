install:
	@echo "Installing dependencies..."
	@echo "Streamez Asinine"
	@echo "=== SCSS ==="
	@npm install sass
	@echo "=== THREE ==="
	@npm install three
	@echo "=== PRISMA ==="
	@npm install prisma
	@npm install

start:
	@npm run dev
