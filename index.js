const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
    // ...and any other configuration
  });

  const address = "0x14bb7a637fab7ef189ddb052153239cf31892d8c";

  const chain = EvmChain.BSC;

  const response = await Moralis.EvmApi.token.getTokenPrice({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();