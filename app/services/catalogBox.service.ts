import prisma from "~/utils/prisma"

export const boxCatalogService = {
    getAll: async (
        { search }: { search?: string }
    ) => {
        if (search) {
            try {
                return {
                    data: await prisma.box.findMany({
                        where: {
                            status: "ACCEPTED",
                            name: search
                        }
                    }),
                    success: true,
                }
            } catch {
                return {
                    data: [],
                    success: false,
                }
            }
        } else {
            try {
                return {
                    data: await prisma.box.findMany({
                        where: {
                            status: "ACCEPTED",
                        }
                    }),
                    success: true,
                }
            } catch {
                return {
                    data: [],
                    success: false,
                }
            }
        }

    },
}
