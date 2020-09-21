import React from "react";

export default class AddOption extends React.Component {
    state = {
      error: null
    };
    handleAddOption = (e) => {
      e.preventDefault();
     
      const option = e.target.elements.optionText.value.trim();
      //call handleAddNewOption with entered value will return error message if needed, if not it will add option to the option array and error will be undefined
      const error = this.props.handleAddNewOption(option);
      
      this.setState(() => ({ error: error}))
      
      if(!error) {
        e.target.elements.optionText.value = "";
      }
    };
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form 
          className="add-option"
          onSubmit={this.handleAddOption}
          >
            <input 
            className="add-option__input"
            type="text" 
            name="optionText"
            />
            <button className="button">Click to add title!</button>
          </form>
        </div>
      );
    }
  }