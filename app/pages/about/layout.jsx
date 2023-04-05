import Layout from "@/components/Layout/Layout";
import React from "react";

export const metaData = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Layout>{children}</Layout>
    </section>
  );
}
