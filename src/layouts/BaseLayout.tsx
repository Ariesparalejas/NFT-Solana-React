import React, { FC } from "react";
import Footer from "src/components/molecules/Base/Footer";
import NasusNav from "src/components/molecules/Base/NasusNav";

interface BaseLayoutProps {
  /**
   * Children To be populated inside the layout
   */
  children?: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <main className="bg-app-background min-h-screen">
      <NasusNav />
      <section className="pt-2 w-full mx-auto px-3 relative min-h-full">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default BaseLayout;
