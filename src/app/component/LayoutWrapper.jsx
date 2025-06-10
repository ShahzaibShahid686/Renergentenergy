"use client";
import Header from "./Header";
import Footer from "./Footer";
export default function LayoutWrapper({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}