install:
	@echo "Installing dependencies..."
	@echo "Streamez Asinine"
	@npm install
	@echo "=== Preparing ==="
	@npm run prepare
	
start:
	@echo "=== Launch Remix Server ==="
	@npm run dev
	@echo "=== Launch Prisma Studio ==="
	@npx prisma studio
	
migrate:
	@echo "Migrating database models..."
	@npx prisma migrate dev