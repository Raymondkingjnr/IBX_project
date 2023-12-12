import {
  Authors,
  BooksContainer,
  Footer,
  Header,
  Hero,
  Newsletter,
  TopBooks,
  YourBooks,
} from "@/app/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Header />
      <Hero />
      <BooksContainer />
      <Authors />
      <YourBooks />
      <Newsletter />
      <TopBooks />
      <Footer />
    </main>
  );
}
