import prisma from "~/utils/prisma"

export const boxCatalogService = {
    getAll: async (
        {
            q = '',
        }: {
            q?: string
        } = {
                q: ''
            }
    ) => {
        if (q) {
            try {
                return {
                    data: await prisma.box.findMany({
                        where: {
                            status: "ACCEPTED",
                            name: q
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
