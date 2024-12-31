const TonWeb = require("tonweb");

const connectTON = () => {
  return new TonWeb({
    providerUrl: "https://toncenter.com/api/v2/jsonRPC", 
  });
};

module.exports = connectTON;
