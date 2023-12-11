import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Hope4All from "./components/Hope4All";
import Approach from "./components/Approach";
import Contact from "./components/Contact.tsx";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./utils/trpc.ts";

function App() {
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
        <Contact />
        <Footer />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
