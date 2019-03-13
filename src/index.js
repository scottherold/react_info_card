import React from 'react';
import ReactDom from 'react-dom';
import InfoCard from './components/InfoCard'

ReactDom.render(<InfoCard title="Test" description="lorem ipsum" imgPath="./images/test.png" />, document.getElementById("root"));
