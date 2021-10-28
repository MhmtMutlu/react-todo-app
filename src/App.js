import React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <Form />
      <Tabs />
    </Layout>
  );
}

export default App;