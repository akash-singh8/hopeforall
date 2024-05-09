import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Hope4All from "./components/Hope4All";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Services from "./components/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [queryClient] = useState(() => new QueryClient());
  // const [trpcClient] = useState(() =>
  //   trpc.createClient({
  //     links: [
  //       httpBatchLink({
  //         url: "http://localhost:3000",
  //       }),
  //     ],
  //   })
  // );

  return (
    // <trpc.Provider client={trpcClient} queryClient={queryClient}>
    //   <QueryClientProvider client={queryClient}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hope4all" element={<Hope4All />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    //   </QueryClientProvider>
    // </trpc.Provider>
  );
}

export default App;
