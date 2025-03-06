# Call a Contract from Any Agglayer-Connected Chain

This tutorial demonstrates how to call a deployed smart contract from any Agglayer-connected chain. Follow the steps below to get started.

## Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AkshatGada/Call_Smart_Contract_Tutorial.git example
   cd example
   ```
2. **Install Packages**
   ```bash
   npm install
   ```
3. **Configure Environment Variables**
   - Create a `.env` file in the root directory.
   - Use the `.env.example` file as a template.
   - Fill in the required details in your new `.env` file.

4. **Deploy counter.sol using Hardhat**
   - Compile the smart contract:
     ```bash
     npx hardhat compile
     ```
   - For deploying to a testnet, update your `hardhat.config.js` with the      appropriate network details and run:
     ```bash
     npx hardhat run scripts/deploy.js --network <network_name>
     ```
5. **Add Deployed Contract Address**
   - Open `bridge_and_call.js`.
   - Locate the line:
     ```javascript
     const callAddress = "";
     ```
   - Replace the empty string with your deployed contract address.

6. **Bridge and Call the Contract**
   - Execute the following command to initiate the bridge and call process:
     ```bash
     node bridge_and_call.js
     ```
7. **Claim the Bridge and Call Transaction**
   - Finally, run the following command to claim the transaction:
     ```bash
     node claim_bridge_and_call.js
     ```