import { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (formParams) => {
    console.log(formParams);
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    // this.setState({data, requestParams});
    setData(data);
    setRequestParams({...requestParams, ...formParams});
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form
        setRequestParams={setRequestParams}
        requestParams={requestParams}
        handleApiCall={callApi} />
      {data ? <Results data={data} /> : <p>loading</p> }
      <Footer />
    </>
  );
}

export default App;
