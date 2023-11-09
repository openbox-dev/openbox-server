install:
	@echo "Installing dependencies..."
	@echo "Streamez Asinine"
	@npm install
	@echo "=== Preparing ==="
	@npm run prepare

start:
	@npm run dev

migrate:
	@echo "Migrating database models..."
	@npx prisma migrate dev
	@npx prisma studio