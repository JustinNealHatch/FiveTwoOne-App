import React, { Component } from "react";
import { Button } from "reactstrap";
import EventCard from "./EventCard";

class Event extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { event, check, cSelected, disabled } = this.props;
    const { choices } = this.props.event;
    // console.log("event in Event: ", event);
    // console.log("check in Event: ", check);
    // console.log("event.choices in Event: ", choices);
    const display_choice = Math.max(...choices.map(e => e.status));
    const newChoices = event.choices.filter(
      choice => choice.status >= display_choice
    );
    // console.log("newChoices in Event: ", newChoices);

    return (
      <div>
        <h3>{event.event_name}</h3>
        {newChoices != undefined && (
          <ul className="event-container">
            {newChoices.
              map((choice, index) => {
              return (
                <div className="event-item" key={index}>
                  <EventCard
                    choice={choice}
                    check={check}
                    disabled={disabled}
                    cSelected={cSelected}
                    newChoices={newChoices}
                    onCheckboxBtnClick={this.props.onCheckboxBtnClick}
                  />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
export default Event;
