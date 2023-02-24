import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainContainer from "../components/common/MainContainer";

import "@rainbow-me/rainbowkit/styles.css";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Chain } from "wagmi/chains";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       cacheTime: 0,
  //     },
  //   },
  // });

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 0,
          },
        },
      })
  );

  const localHost: Chain = {
    name: "Localhost",
    id: 1337,
    network: "localhost",
    // iconUrl: 'https://example.com/icon.svg',
    // iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: "Testnet FIL",
      symbol: "TFIL",
    },
    rpcUrls: {
      default: {
        http: ["127.0.0.1:8545"],
      },
      public: {
        http: ["127.0.0.1:8545"],
      },
    },
    blockExplorers: {
      default: { name: "FilScan", url: "https://explorer.glif.io/ethereum/" },
    },
    testnet: true,
  };

  const hyperspaceTestnet: Chain = {
    name: "Hyperspace Testnet",
    id: 3141,
    network: "hyperspace",
    // iconUrl: 'https://example.com/icon.svg',
    // iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: "Testnet FIL",
      symbol: "tFIL",
    },
    rpcUrls: {
      default: {
        http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
      },
      public: {
        http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
      },
    },
    blockExplorers: {
      default: { name: "FilScan", url: "https://explorer.glif.io/ethereum/" },
    },
    testnet: true,
  };

  const { chains, provider } = configureChains(
    [hyperspaceTestnet],
    // [localHost],
    [
      alchemyProvider({ apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Greenade",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider theme={darkTheme()} chains={chains}>
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
          <Toaster />
        </RainbowKitProvider>{" "}
      </WagmiConfig>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
