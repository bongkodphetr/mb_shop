const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const CompanyController = {
        create: async (req, res) => {
        try{
            await prisma.company.create({
                data: {
                    name: req.body.name,
                    address: req.body.address,
                    phone: req.body.phone,
                    email: req.body.email ?? '',
                    taxCode: req.body.taxCode
                }
            })
            res.json({ message: "success "})
        }catch(err) {
            res.status(500).json({ error: err.message })
            }
        }
}
module.exports = { CompanyController }