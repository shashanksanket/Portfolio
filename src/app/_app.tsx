"use client"
import store from "@/store";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/footer";
import { Provider } from "react-redux";
import { Suspense } from "react";

export default function Component({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <Navbar />
      <div className="pt-36 text-white">
        {children}
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </Provider>
    </Suspense>
  );
}
