import prisma from "~/utils/prisma"

export const boxCatalogService = {
    getAll: async (
        { search }: { search?: string }
    ) => {
        try {
            if (search) {
                return {
                    data: await prisma.box.findMany({
                        where: {
                            status: "ACCEPTED",
                            name: search
                        }
                    }),
                    success: true,
                }
            } else {
                return {
                    data: await prisma.box.findMany({
                        where: {
                            status: "ACCEPTED",
                        }
                    }),
                    success: true,
                }
            }
        } catch {
            return {
                data: [],
                success: false,
            }
        }
    }
}
