import React from "react";
import AddOption from "./AddOption.js"
import Header from "./Header.js"
import Action from "./Action.js"
import Options from "./Options.js"
import OptionModal from "./OptionModal.js"

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: null
  };
  handlePick = () => {
     const randomIndex = Math.floor(Math.random() * this.state.options.length);
     const randomOption = this.state.options[randomIndex];
     this.setState(() => {
       return {
         selectedOption: randomOption
       }
     });
  };
  handleDeleteSingleOption = (option) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((opt) => opt !== option)
      }));
  };
  handleDeleteOptions = () => {
      this.setState(() =>  ({ options: []}))
  };
  handleAddNewOption = (option) => {
      //Data validation. If string is empty return error message. If option allready exist return error message
      if(!option) {
        return "Enter a valid value to add item"
      } else if (this.state.options.indexOf(option) > -1) {
        return "This title already exist, try another!"
      }
      this.setState((prevState) => ({options: prevState.options.concat(option)}))
  };
  handleOptionModal = () => {
    this.setState(() => {
      return {
        selectedOption: null
      }
    })
  };
  componentDidMount() {
      try { 
        const optionsSaved = JSON.parse(localStorage.getItem("options"));
        console.log("Data in local Storage:", optionsSaved);
          if(optionsSaved) {
            console.log("fetched stored data");
            this.setState(() => {
              return {
                options: optionsSaved
              }
            });
      }} catch(err){
        console.log(err);
      } 
  }
  componentDidUpdate() {
        const optionsToStore = JSON.stringify(this.state.options);
        if(optionsToStore !== localStorage.getItem("options")) {
          localStorage.setItem("options", optionsToStore);
          console.log("saved new data");
        }
      }
  render() {
      const title = "The Book Picker";
      const subtitle = "A Booklovers Best Friend";
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
            <div className="container">
              <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
              />
              <div className="widget-body">
                <Options 
                  options={this.state.options}
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteSingleOption={this.handleDeleteSingleOption}
                />
                <AddOption 
                  handleAddNewOption={this.handleAddNewOption}
                />
              </div>
            </div>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            handleOptionModal={this.handleOptionModal}
          />
        </div>
      );
    }
}
  
 
 
  