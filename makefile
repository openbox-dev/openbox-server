install:
	@echo "Installing dependencies..."
	@echo "Streamez Asinine"
	@npm install
	@echo "=== Preparing ==="
	@npm run prepare
	
start:
	@echo "=== Launch Prisma Studio & Remix Server &  SCSS compile==="
	@npx prisma studio | npm run dev | npm run dev:css
	
migrate:
	@echo "Migrating database models..."
	@npx prisma migrate dev