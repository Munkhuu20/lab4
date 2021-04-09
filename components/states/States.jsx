import React from "react";
import "./States.css";

class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: "",
    };
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
  }

  handleFilterChange = (event) => {
    this.setState({ substring: event.target.value });
  };

  render() {
    var results = window.cs142models
      .statesModel()
      .filter((state) =>
        state.toLowerCase().includes(this.state.substring.toLowerCase())
      )
      .map((state) => <div key={state}>{state}</div>);

    return (
      <div className="cs-container">
        <h1>
          Haisan utga, &quot;
          {`${this.state.substring}`}&quot;.
        </h1>
        <h2>Utga</h2>
        <input
          id="search-input"
          type="text"
          value={this.state.substring}
          onChange={(event) => this.handleFilterChange(event)}
        />
        <h2>Result:</h2>
        <div id="states-list">
          {results.length == 0 ? `No results` : results}
        </div>
      </div>
    );
  }
}

export default States;
