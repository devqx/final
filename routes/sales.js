import express from 'express'
const Router = express.Router();

Router.get('/sales', (req,res)=>{
    res.json({
        sales: [
            {
                salesDay: '2018-09-09',
                totalItemsSold: 65,
                costPerItem: 10,
                totalSalesCost:1650

            },
            {
                salesDay: '2018-09-09',
                totalItemsSold: 65,
                costPerItem: 10,
                totalSalesCost:1650

            },
            {
                salesDay: '2018-09-09',
                totalItemsSold: 65,
                costPerItem: 10,
                totalSalesCost:1650

            }
        ]
    })
})

module.exports = Router;