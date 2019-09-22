import React from 'react';
import  PropTypes from 'prop-types';
import './Square.css';


export  default class Square extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            currentColor: this.props.initialColor,
        };
    }

    setCurrentColor(currentColor){
        this.setState({
            currentColor,
        });
    }


    render() {
        console.log(this.state);
        let textInput;

        const size = `${this.props.size}px`;

        const style = {
            width: size,
            height: size,
            backgroundColor: this.state.currentColor,
        };
        return (
            <div className={'Square'} style={style}>
                <div className='SquareControls'>
                    <input ref={(element) => {console.log(textInput = element);}}  type='text' placeholder='Color...' />
                    <button onClick={() => { this.setCurrentColor(textInput.value);}}>Push</button>
                </div>
            </div>);
    }
}
Square.propTypes = {
    initialColor: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
};
Square.defaultProps  = {
    initialColor: 'brown',
    size: 100
};