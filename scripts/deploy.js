async function main() {
    const Counter = await ethers.getContractFactory("counter");
    console.log("Deploying contract...");
    const counter = await Counter.deploy();
    await counter.deployed();
    console.log("Contract deployed to:", counter.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });