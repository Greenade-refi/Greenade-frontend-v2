export type ProjectType = {
  id: number;
  name: string;
  technologyType: string;
  description: string;
  totalValue: string;
  offtaker: string;
  coverImageUrl: string;
  location: string;
  sold: string;
  verified?: boolean;
  commisioningDate: string;
};

export const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "ContractCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "createEclipseDataDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createProject",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
    ],
    name: "getEclipse",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "myToken",
    outputs: [
      {
        internalType: "contract CarbonCreditToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyProject",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const ADDRESS_CONTRACT = "0xe061B68D9022D7776B9fBE24EE3d6e23e2008474";
export const TOKEN = "0xB4652c0BD9Df997a93b1CAa476e94336089F1b99";

export const projects: ProjectType[] = [
  {
    id: 1,
    name: "Gaia Solar",
    technologyType: "Solar",
    description:
      "The purpose of the project activity was substituting sulphur hexafluoride (SF6), a high global warming potential (GWP) gas, with a non-global warming sulphur dioxide (SO2) gas at RIMA magnesium factory. SF6 was used as a cover gas to prevent oxidation of the liquid metal during production and casting of magnesium metal products, and typically escape to the atmosphere. SF6 was considered a non-reactive gas, and is ideally suited for this kind of protection as a “covering” for liquid magnesium (hence the term “cover gas”). Although SO2 is not a greenhouse gas, this gas has health impacts, therefore new latest environmental/safety high control technology was transferred to RIMA, to ensure safe handling of SO2.",
    totalValue: "255",
    offtaker: "3",
    coverImageUrl:
      "https://images.unsplash.com/photo-1536408745983-0f03be6e8a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
    location: "India",
    sold: "20",
    verified: true,
    commisioningDate: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    name: "Hydro Power M&T",
    technologyType: "Hydro",
    description:
      "Hydro Power Project at Tangnu is proposed with 3 units of 2.0 MW each. The purpose of this project is to generate hydro power by utilizing the potential energy available in the flowing river Supin and Sundru, The electricity generated through this hydropower project will be exported to the Himachal Pradesh State Electricity Board (HPSEB), a state owned power utility company. Electricity delivered to the grid by the project would have otherwise been generated by the fossil fuel fired power plants that dominate the grid connected to the project activity. The project will hence displace CO2 emissions generated by these power plants. As the project is a Greenfield project activity, the baseline scenario is the same as the scenario existing prior to the start of the project activity. The project is expected to be commissioned by 31st December 2013.",
    totalValue: "223",
    offtaker: "3",
    coverImageUrl:
      "https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3260&q=80",
    location: "India",
    sold: "10",
    commisioningDate: new Date().toLocaleDateString(),
  },

  {
    id: 3,
    name: "Rewind Mill FZ",
    technologyType: "Wind",
    description:
      "The REDD+ project in Brazil Nut Forests in Madre de Dios is being carried out by our Peruvian partner, Bosques Amazónicos (BAM), in conjunction with 600 rural families grouped in the Federation of Brazil Nut Producers of Madre de Dios (FEPROCAMD), with the purpose of protecting 490,000 hectares of pristine rainforests. These forests are seriously threatened by the construction of the South Inter-Oceanic Highway, a highway that links Perú with Brazil and the Pacific Ocean, which is driving the migration to the area. This migration, in turn, has increased the demand for land for deforesting activities such as agriculture and livestock, increased timber extraction without forest management, uncontrolled hunting of wildlife and illegal gold mining in the basins and surrounding areas. Concessioner communities are highly dependent on local ecosystems, but have few resources with which to protect their concessions.",
    totalValue: "255",
    offtaker: "4",
    coverImageUrl:
      "https://images.unsplash.com/photo-1609780252796-ff1937cbeb92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    location: "India",
    sold: "10",
    verified: true,
    commisioningDate: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    name: "El Panul",
    technologyType: "Solar",
    description:
      "The “El Panul” Landfill was opened in 1981, and nearly 2 million tons of municipal solid waste from the cities of Coquimbo, La Serena, and Paihuano have been deposited at the site since then. The landfill consists of two main areas, a closed dumpsite and an engineered sanitary landfill (which recently started operation). The landfill includes a leachate collection system, a lined leachate basin, and a passive venting system to partially collect and flare the LFG.",
    totalValue: "255",
    offtaker: "7",
    coverImageUrl:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
    location: "India",
    sold: "10",
    commisioningDate: new Date().toLocaleDateString(),
  },
];
