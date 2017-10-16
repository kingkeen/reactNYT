// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("../Query");
var Results = require("../Results");

// Include the helpers for making API calls
var helpers = require("../helpers");

// Create the Search component
export default class Search extends React.Component {
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState = () => {
    return {
      results: {}
    };
  };

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery = (newQuery, newStart, newEnd) => {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: { docs: data.docs } });
    });
  };

  // Render the component. Note how we deploy both the Query and the Results Components
  render() {
    // console.log("Render Results", this.state.results);

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}

        {/* NEED TO FIX THIS */}
        {/* <Query updateSearch={this.setQuery} /> */}
        {/* Note how we pass in the results into this component */}
        {/* <Results results={this.state.results} /> */}
      </div>
    );
  }
};


