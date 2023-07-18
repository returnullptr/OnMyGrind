import React, { Component, useEffect, useState } from "react";

// handleChange: to get selections saved within the BaristaForm component's state
// label: description for the corresponding ingredient (e.g. "milk")
// choices: the list of answer
// checked: deselects the user's choice when they request a new drink
const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <div>
            <div className="radio-buttons">
                {/*id and value keep track of what the form is recognizing as our choice*/}
                {/*name groups input buttons together so that the app recognizes they are
                all answers to the same question. The name attribute is what enforces radio
                buttons as mutually exclusive, so that when one is selected, any others with
                the same name will be deselected.*/}
                {/*onChange will let the form know what to do when the user selects a choice*/}
                {/*checked keeps track of whether the radio button will be selected or deselected.*/}
                {/*Everything in the {} is what we will pass in from our parent component, BaristaForm*/}
                {choices && choices.map((choice) => (
                        <li key={choice}>
                            <input
                                id={choice}
                                value={choice}
                                name={label}
                                type="radio"
                                onChange={handleChange}
                                checked={checked == choice}
                            />
                            {choice}
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export default RecipeChoices;