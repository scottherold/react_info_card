import React from 'react';

// Creates TrivaCard Class
class TriviaCard extends React.Component {
    
    // Constructor method injects props
    constructor(props) {

        // Super passes props from parent class and injects into instance
        super(props);
        
        // Click Functions
        this.handleQuestionStateClick = this.handleQuestionStateClick.bind(this)
        this.handleHintStateClick = this.handleHintStateClick.bind(this)

        this.state = {
            title: <h1>{this.props.title}</h1>,
            description: this.props.question,
            isClicked: false,
        }
    }

    // Click EventHandler Functions
    handleQuestionStateClick() {
        this.setState({isClicked: true})
    }

    handleHintStateClick() {
        this.setState({isClicked: false})
    }

    // Render method returns the element
    // Clicking on the card, removes title and changes the description from 'question' to 'hint'
    render() {
        // Creates dynamic variables
        const isClicked = this.state.isClicked;
        let title;
        let description;
        let click;

        // If isClicked is true, then hide {title} and display hint as decription, else display title/question as description
        if (isClicked) {
            title = "";
            description = this.props.hint;
            click = this.handleHintStateClick;
        } else {
            title = this.state.title;
            description = this.state.description;
            click = this.handleQuestionStateClick;
        }

        return (
            <div onClick={click} className="row justify-content-center">
                <div className="col-2 text-center mt-5 border border-dark rounded">
                    <img className="border-bottom mt-4 mb-3 pb-2" style={{width:200, height:125}} src={this.props.imgPath} alt={this.props.title}></img>
                    {title}
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
    
export default TriviaCard;