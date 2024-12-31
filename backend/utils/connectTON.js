const TonWeb = require("tonweb");

const connectTON = () => {
    return new TonWeb({
        // Replace with your TON Blockchain connection details
        providerUrl: "https://main.ton.dev",
    });
};

module.exports = connectTON;