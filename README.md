deployed at https://dev-cert-practice-2.vercel.app/

second dev cert practice
- did it with shadcn this time
- deployed to vercel
- turned off cursor autocomplete, AI used only for questions
- actually decent file structure

NOTES:
- need to redo ignition file for constructor because contract isn't payable
- make sure to install tailwindcss manually before shadcn
- to resolve shadcn "import alias" issue, add ```"baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }``` (src: https://stackoverflow.com/questions/79115798/shadcn-no-import-alias-found-in-your-tsconfig-json-file)
- need to add baseSepolia to wagmi.ts
- remember to make github repo in parent folder
  
  

TO DO:
- learn how to make a test file
- learn readContract and fetch mechanics (or find docs)

PROCESS:
1) create backend folder
2) npx hardhat init (typescript with viem)
3) write contract
4) edit ignition file
5) add baseSepolia network to hardhat config
6) create .env with private key
7) npx hardhat compile
8) npx hardhat ignition deploy ./ignition/modules/<file>.ts --network baseSepolia --> copy address
9) compile code in remix --> copy ABI
10) create frontend folder
11) npm init @rainbow-me/rainbowkit@latest
12) install tailwindcss manually
13) fix import alias in tsconfig file
14) npx shadcn@latest init
16) add address and ABI to src/constants.ts
17) build frontend
18) deploy to vercel


