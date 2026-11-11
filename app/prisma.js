import { PrismaPg } from '@prisma/adapter-pg'
import pkg from '@prisma/client'
import 'dotenv/config'
// fjal;skdjfas
const { PrismaClient } = pkg

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })

export const prisma = new PrismaClient({ adapter })
