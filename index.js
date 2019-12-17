const server = require("./api/server.js");

const PORT = process.env.PORT || 9993;
server.listen(PORT, () => console.log(`\n Running on port: ${PORT} \n`))