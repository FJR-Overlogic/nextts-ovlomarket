import Header from "@/components/elements/home/header/header";
import Footer from "@/components/layouts/footer/footer";
import Product from "@/components/elements/home/product/product";
import Tranding from "@/components/elements/home/tranding/tranding";

export default function Home() {
  return (
    <div>
      <Header />
      <Product />
      <Tranding />
      <Footer />
    </div>
  );
}
