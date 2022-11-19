const bsg2_abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_usdtAddr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_defaultRefer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_feeReceiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_startTime",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event",
    "hash": "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c",
    "shortHash": "0xe1fffcc4"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "DepositBySplit",
    "type": "event",
    "hash": "0x29e90a65bdaddba77321b34070d4cd09a4d33ccf332d7760c852917757eed3cb",
    "shortHash": "0x29e90a65"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "day",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "DistributePoolRewards",
    "type": "event",
    "hash": "0xac8b1c45d5899cff03c2c490d75f74dc63e211c16bb3862679bf1263b7d3f98c",
    "shortHash": "0xac8b1c45"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "number",
        "type": "uint256"
      }
    ],
    "name": "LotteryBet",
    "type": "event",
    "hash": "0x3e3a0b2fc99339b82e319bf69c53cc312a84f882706442b364bf7a99c8c74658",
    "shortHash": "0x3e3a0b2f"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "referral",
        "type": "address"
      }
    ],
    "name": "Register",
    "type": "event",
    "hash": "0x98ada70a1cb506dc4591465e1ee9be3fd7a2b6c73ecf3b949009718c9a351519",
    "shortHash": "0x98ada70a"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "subBal",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "transferType",
        "type": "uint256"
      }
    ],
    "name": "TransferBySplit",
    "type": "event",
    "hash": "0xfe8bcbe9cbc0e3a44517ca1ab49afd99c9cf86ea80825c49bb82dfaa93eaf209",
    "shortHash": "0xfe8bcbe9"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "withdrawable",
        "type": "uint256"
      }
    ],
    "name": "Withdraw",
    "type": "event",
    "hash": "0x884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364",
    "shortHash": "0x884edad9"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "hash": "0xb6b55f256c3eb337f96418d59e773db6e805074f5e574a2bebb7d71394043619",
    "shortHash": "0xb6b55f25"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "depositBySplit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "hash": "0xc511b3452db35d90badf87a200267b23ff2c5582950153556b4f392654517b2e",
    "shortHash": "0xc511b345"
  },
  {
    "inputs": [],
    "name": "distributePoolRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "hash": "0x70abe5fee7d71bcd5c50e8742d3dec1a88569e621930f73c9c6c3b4602e73460",
    "shortHash": "0x70abe5fe"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_day",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_number",
        "type": "uint256"
      }
    ],
    "name": "getAllLotteryRecord",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x5bb99574350de42950fad7f4d65f8004b9282897c69b05059fb1085bd885b8c2",
    "shortHash": "0x5bb99574"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_bal",
        "type": "uint256"
      }
    ],
    "name": "getBalInfos",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0xf11a8312f331b64ff20a466e9f62f36c8eef543855b69f408d166ad91b07d506",
    "shortHash": "0xf11a8312"
  },
  {
    "inputs": [],
    "name": "getContractInfos",
    "outputs": [
      {
        "internalType": "address[3]",
        "name": "",
        "type": "address[3]"
      },
      {
        "internalType": "uint256[6]",
        "name": "",
        "type": "uint256[6]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x05495b0d3355f93745366cd777b1616865587e420455ffd739b05665ff94a577",
    "shortHash": "0x05495b0d"
  },
  {
    "inputs": [],
    "name": "getCurCycle",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x5f23656e8f146caeb42d2582fe26757625387ec2998b1d55958d7c1169d3a602",
    "shortHash": "0x5f23656e"
  },
  {
    "inputs": [],
    "name": "getCurDay",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x00a7a56edcf56bcfb0b5965057c7d71ef5efc61336a90b0288d57b2e5d3188e9",
    "shortHash": "0x00a7a56e"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_day",
        "type": "uint256"
      }
    ],
    "name": "getDayInfos",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x95d895e1fa4a7228fc09437e4d1a3840aab791b5770182cb5515170e2efd1169",
    "shortHash": "0x95d895e1"
  },
  {
    "inputs": [],
    "name": "getDepositors",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x6c7b7f2e8fb9c6502b2694e584013a2a181a47c149de7ccdb594a59fd91cbf69",
    "shortHash": "0x6c7b7f2e"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_day",
        "type": "uint256"
      }
    ],
    "name": "getLottoryWinners",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x18858a25d0c60f2d4feb8a8cf1c86233722f6ac6b2ce0c670e7aafe86db3676b",
    "shortHash": "0x18858a25"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_day",
        "type": "uint256"
      }
    ],
    "name": "getLuckInfos",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x06c8f7162a1537924120ddf235c54b7f242d16c04f049109e4e7a05e390fbee0",
    "shortHash": "0x06c8f716"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddr",
        "type": "address"
      }
    ],
    "name": "getTeamDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x7647e0ff0bb4ed90d950d54d3b8188cd1d1bafe151399e762323a881d70442a4",
    "shortHash": "0x7647e0ff"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_layer",
        "type": "uint256"
      }
    ],
    "name": "getTeamUsers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x9824294a339b67f75c03fcd3e13d9c5d03399c0881569fe9936afebfe1d1a21d",
    "shortHash": "0x9824294a"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_cycle",
        "type": "uint256"
      }
    ],
    "name": "getUserCycleMax",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0x4f299df482f5e3af9e4a17d9896e7bf657f3dec8433110820c9291ef72cfe570",
    "shortHash": "0x4f299df4"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userAddr",
        "type": "address"
      }
    ],
    "name": "getUserInfos",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "level",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxDeposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxDepositable",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "teamNum",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "teamTotalDeposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalFreezed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalRevenue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "unfreezeIndex",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "unfreezedDynamic",
            "type": "bool"
          }
        ],
        "internalType": "struct BSG2.UserInfo",
        "name": "",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "capitals",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "statics",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "invited",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "level5Freezed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "level5Released",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "luckWin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lotteryWin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "split",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lottery",
            "type": "uint256"
          }
        ],
        "internalType": "struct BSG2.RewardInfo",
        "name": "",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "unfreeze",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isUnfreezed",
            "type": "bool"
          }
        ],
        "internalType": "struct BSG2.OrderInfo[]",
        "name": "",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "number",
            "type": "uint256"
          }
        ],
        "internalType": "struct BSG2.LotteryRecord[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "hash": "0xcc56f5818fce1bf5c2f18f0a6b4ebc45ebcb058506f1ec6c7de33bc8a4df9674",
    "shortHash": "0xcc56f581"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_number",
        "type": "uint256"
      }
    ],
    "name": "lotteryBet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "hash": "0xe286fa7a505d7de2e902e246211d2a67f80f5d9a88a3f7a34415e6ad8df95fed",
    "shortHash": "0xe286fa7a"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_referral",
        "type": "address"
      }
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "hash": "0x4420e4869750c98a56ac621854d2d00e598698ac87193cdfcbb6ed1164e9cbcd",
    "shortHash": "0x4420e486"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "transferBySplit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "hash": "0xbbd0c750de121f06e80cb6d76c3456c08987d0203be307d38c05f36ad783147b",
    "shortHash": "0xbbd0c750"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "hash": "0x3ccfd60b2e3ddce51ab210bfb9db13577f03a21684fa35e4bcd739dd5a30bda2",
    "shortHash": "0x3ccfd60b"
  }
]