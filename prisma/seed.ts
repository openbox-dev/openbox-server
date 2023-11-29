import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const createMany = await prisma.box.createMany({
        data: [
            {
                status: 'ACCEPTED',
                name: 'Box Github',
                description: 'Apprend Github en t\'amusant avec Louisan aka le vomito du métro ou encore le FOAT: forceur alltime avec angular',
                createdAt: '1999-04-14T00:00:00.000Z'
            },
            {
                status: 'ACCEPTED',
                name: 'Box Asinine',
                description: 'T\' streamé ? Bah alors t\'attends quoi GRRRRRRRRR',
                createdAt: '2023-08-20T00:00:00.000Z'
            },
            {
                status: 'ACCEPTED',
                name: 'Box Zen',
                description: 'Le gros nez de Maxime Biaggi, ahhahah regardez le tous il s\'est fait rentrer dedans au GP2',
                createdAt: '2023-02-10T00:00:00.000Z'
            },
            {
                status: 'ACCEPTED',
                name: 'Box Malveillance MAX',
                description: 'Juste de la malveillance',
                createdAt: '2022-11-02T00:00:00.000Z'
            },
            {
                status: 'ACCEPTED',
                name: 'Box Garfield',
                description: 'J\'étais gros en 5ème donc c\'était mon surnom, fin de la vanne',
                createdAt: '2012-02-09T00:00:00.000Z'
            },
            {
                status: 'ACCEPTED',
                name: 'Box Antifun',
                description: 'Juste la pour être hyper méga giga ultra AIGRI ET NO FUN',
                createdAt: '2023-04-20T00:00:00.000Z'
            },
            {
                status: 'ACCEPTED',
                name: 'Box Matrix',
                description: 'Un des meilleurs film de tous les temps, non je ne suis pas ouvert au débat',
                createdAt: '1999-06-23T00:00:00.000Z'
            },
        ],
        skipDuplicates: true,
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

