/*
// Title: App.jsx
// Description: Application layout defined here.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import './app.css';
import Form from './components/Form';
import Layout from './components/Layout';
import Posts from './components/Posts';

export default function App() {
  return (
    <Layout>
      <Form />
      <Posts />
    </Layout>
  )
}