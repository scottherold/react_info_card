import React from 'react';
import ReactDom from 'react-dom';
import TriviaCard from './components/TriviaCard'

ReactDom.render(<TriviaCard 
    title="Baseball" 
    question="Who holds the record for most career stolen bases?" 
    hint="This player stole a single-season record of 130 bases in 1983 as a member of the Oakland Athletics"
    imgPath="./images/baseball.png" />, 
    document.getElementById("root"));
