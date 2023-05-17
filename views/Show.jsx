const React = require("react");

class Show extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Show page</h1>
        {this.props.logs.title}
        <br />
        {this.props.logs.entry}
        <br />
        {this.props.logs.shipIsBroken ? "true" : "false"}
        <br />
        <a href={`/logs`}>Back</a>
      </div>
    );
  }
}

module.exports = Show;