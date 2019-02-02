const { prisma } = require('./generated/prisma-client')

async function main() {
  const x = await prisma.createCompany({
    name:"test",
    user: { connect: { id: 1 } },
  })
  console.log(x)
}

main()
