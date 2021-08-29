const express = require('express');
const router = express.Router();

const ServerInfo =  require('../models/serverInfo')
const StatusHistory = require('../models/statusHistory')

/* GET home page. */
router.get('/status', async function(req, res, next) {
    const result = []

    const servers = await ServerInfo.find({})

    for (const server of servers) {
        const friendlyServer = {
            id: server._id,
            name: server.Name,
            description: server.Description,
            host: server.Host,
            history: []
        }

        const history = await StatusHistory.find({ ServerId: server._id }).sort('-ReportDate')

        for (const historyEntry of history) {
            const friendlyHistory = {
                status: historyEntry.StatusCode,
                date: historyEntry.ReportDate,
                online: historyEntry.OnlineStatus
            }

            friendlyServer.history.push(friendlyHistory)
        }

        result.push(friendlyServer)
    }


    res.status(200).json(result)
});

module.exports = router;
