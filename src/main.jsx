import React from 'react'
import ReactDOM from 'react-dom'
import './sass/main.scss'
import Layout from './components/Layout/Layout';
import Home from './pages/home/Home';
import Cards from './pages/Cards/Cards';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Home>
        <Cards />
      </Home>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
