import React from 'react';
import ReactJson from 'react-json-view';

function Results(props) {
  return (
    <section>
      <pre>
        { props.data
          ? <ReactJson src={props.data} theme="summerfruit:inverted" />
          : null}
        </pre>
    </section>
  );
}

export default Results;
