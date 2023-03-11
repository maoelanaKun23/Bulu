const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/health',require('./healthcheck.route'));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
const defaultDomain = process.env.REACT_APP_DOMAIN
const defaultUrl = process.env.REACT_APP_API_URL
const clientId = process.env.REACT_APP_X_IBM_CLIENT_MSTEAMS
const server = app.listen(8080, async () => {
  try {
	console.log("sending start to msteams");
    await axios.post(
      `${defaultUrl}/dad/msteams`,
      {
        summary:`["DCA -WEBDCA"](${defaultDomain})`,
        themeColor:"#f7db05",
        sections:[
          {
            markdown:true,
            activityTitle:`["DCA -WEBDCA"](${defaultDomain})`,
            activitySubtitle:"Application has started",
            activityImage:"https://image.flaticon.com/icons/png/512/1537/premium/1537854.png",
            activityImageType:"article",
            Facts:[
              {
                name:"Date",
                value:new Date(),
              },
              {
                name:"Message",
                value:"Application has started",
              },
            ],
          },
        ],
      },
      {
        headers:{
        "x-ibm-client-id":clientId,
      },
    }
    );
  } catch (error) {
    console.log(error)
  }
});
process.on("SIGTERM",shutDown);
process.on("SIGINT",shutDown);
async function shutDown () {
	try {
		console.warn("sending stop to msteams");
		await axios.post(
			`${defaultUrl}/dad/msteams`,
			{
				summary: `["DCA -WEBDCA"](${defaultDomain})`,
				themeColor: "#f7db05",
				sections: [
					{
						markdown: true,
						activityTitle: `["DCA -WEBDCA"](${defaultDomain})`,
						activitySubtitle: "Application has stopped",
						activityImage:
							"https://image.flaticon.com/icons/png/512/1537/premium/1537854.png",
						activityImageType: "article",
						Facts: [
							{
								name: "Date",
								value: new Date(),
							},
							{
								name: "Message",
								value: "Application has stopped",
							},
						],
					},
				],
			},
			{
				headers: {
					"x-ibm-client-id": clientId,
				},
			}
		);
	} catch (err) {
		console.log(err);
	}
	server.close(() => {
		console.log("Closed out remaining connections");
		process.exit(0);
	});

	setTimeout(() => {
		console.error(
			"Could not close connections in time, forcefully shutting down"
		);
		process.exit(1);
	}, 10000);
}