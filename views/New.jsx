const React = require("react");

// change the input of your checkbox to be true/false rather than on see server.js fruits app example --> line 80 - 84

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a new log</h1>

        <form action="/logs" method="POST">
          title: <input type="text" name="title" />
          <br />
          entry: <input type="textarea" />
          <br />
          shipIsBroken:  <input type="checkbox" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
module.exports = New;