install:
	@echo "Installing dependencies..."
	@echo "Streamez Asinine"
	 @npm install
	@echo "=== Preparing ==="
	 @npm run prepare
	
start:
	@echo "=== Launch Prisma Studio & Remix Server ==="
	@npx prisma studio | npm run dev
	
migrate:
	@echo "Migrating database models..."
	@npx prisma migrate dev