import React from "react";
import Layout from "../components/Layout";
import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_URL || 'http://localhost:1337';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount = () => {
    this.update();
  }

  update = () => {
  }

  render() {
    return (
      <Layout {...this.props}>

        <h1>hello world</h1>

      </Layout>
    );
  }
}

export default Index;
