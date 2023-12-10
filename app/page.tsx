import {
  Authors,
  BooksContainer,
  Footer,
  Header,
  Hero,
  Newsletter,
  SearchContainer,
  TopBooks,
  YourBooks,
} from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <SearchContainer />
      <BooksContainer />
      <Authors />
      <YourBooks />
      <Newsletter />
      <TopBooks />
      <Footer />
    </main>
  );
}
