import React from "react";

export const ContainerPage = ({ children }: { children: React.ReactNode }) => (
  <main className="container flex flex-col min-h-screen mx-auto px-4 justify-center md:px-0 cursor-default">
    <section className="w-full md:w-2xl mx-auto px-6 py-12 my-auto transition-all duration-300">
      {children}
    </section>
  </main>
);
