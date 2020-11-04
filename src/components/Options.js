import React from "react";
import Option from "./Option.js"

const Options = (props) => {
    return (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title"> Your Reading List </h3>
          <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}
            > 
            Remove All
          </button>
        </div>
      
      {(props.options.length === 0) && <p className="widget__selector">Add the title of a book you would like to read!</p>}
      {
        props.options.map((option, index) => (
          <Option 
          key={option} 
          optionText={option}
          count={index +1}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
          />
          ))
      }
      </div>
    );
  };

  export default Options;