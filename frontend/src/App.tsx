import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Hope4All from "./components/Hope4All";
import Approach from "./components/Approach";

import { useState } from "react";
import type { AppRouter } from "../../backend/src/index.ts";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

function App() {
  const trpc = createTRPCReact<AppRouter>();

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Home />
        <Hope4All />
        <Approach />
        <Footer />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
