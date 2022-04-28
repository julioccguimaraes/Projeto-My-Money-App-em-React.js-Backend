const express = require('express') // referencia o mesmo express do arquivo server.js

// recebe o server como parâmetro
module.exports = function(server) {
    // url base para todas as rotas

    const router = express.Router()
    server.use('/api', router)

    // rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}