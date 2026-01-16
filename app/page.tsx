import Blogs from "@/components/common/Blogs";
import Categories from "@/components/common/Categories";
import Collections from "@/components/common/Collections";
import Collections2 from "@/components/common/Collections2";
import Features from "@/components/common/Features";
import Hero from "@/components/homes/home-1/Hero";
import Lookbook from "@/components/common/Lookbook";
import Products1 from "@/components/common/Products1";
import Products2 from "@/components/common/Products2";
import ShopGram from "@/components/common/ShopGram";
import Testimonials from "@/components/common/Testimonials";
import Topbar1 from "@/components/headers/Topbar1";
import Header1 from "@/components/headers/Header1";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || GearO - Office equipment eCommerce React Nextjs Template",
  description: "GearO - Office equipment eCommerce React Nextjs Template",
};

export default function Home() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Hero />
      <Categories />
      <Products1 />
      <Lookbook />
      <Products2 />
      <Collections />
      <Testimonials />
      <Collections2 />
      <Blogs />
      <ShopGram />

      <Features />
    </>
  );
}
