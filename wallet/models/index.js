const { Sequelize } = require('sequelize')


//  const sequelize=new Sequelize(
//   "testerika_wallet","postgres","datacube",{
//     dialect:"postgres",
//     host:"localhost",
//     port:5432,
//     database:"testerika_wallet"
//   }
//  )



//production
const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "wallet",
 "postgres",
  process.env.DB_PASSWORD || "aXx9jvzcArv0g7tjuIMs",
  {
    dialect: "postgres",
    host:
      process.env.DB_HOST ||
      "testerika-production.cahldwhzztzg.ap-south-1.rds.amazonaws.com",
    port: 5432,
    database: process.env.DB_SCHEMA || "wallet",
  }
);

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.WalletTransactions = require('./wallet_transactions')(sequelize, Sequelize)
db.WithdrawRequests = require('./withdraw_requests')(sequelize, Sequelize)
db.PaymentSupports = require('./payment_supports')(sequelize, Sequelize)

module.exports = db
