const express = require('express');
const router = express.Router({});
const ping = require('ping')

/* GET home page. */
router.get ("/", async function (req, res, next) {
    const getHostname = (url) => {
        // use URL constructor and return hostname
        return new URL(url).hostname;
      }
    let data = {};
    const hosts = [{name:"Gateway",url:getHostname(process.env.REACT_APP_API_URL)}];
    let Status;
    let TotalDuration = 0; 
    for (const host in hosts) {
        const result = await ping.promise.probe(hosts[host].url,{timeout:30});
        
        (Status = result.alive ? " Healthy" : " UnHealthy");
          (TotalDuration += result.time);
        data[hosts[host].name] = {
          Data: {},
          Duration: result.time,
          Status,
        };
      }
    //
    res.status(200).json({Status:Status,TotalDuration:TotalDuration,Entries:data});

});
// export router with all routes included
module.exports = router;
