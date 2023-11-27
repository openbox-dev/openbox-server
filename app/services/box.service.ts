import prisma from "~/utils/prisma";

export const BoxService = {
    getAll: async (
        { boxId }: {boxId?: number}
    ) => {
        try {
            if (boxId) {
                return {
                    data: await prisma.box.findFirst({
                        where: {
                            id: boxId
                        }
                    }),
                    success: true
                }
            } else {
                return {
                    data: [],
                    success: true
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