const React = require("react");


class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a new log</h1>

        <form action="/logs" method="POST">
          title: <input type="text" name="title" />
          <br />
          entry: <input type="textarea" name="entry" />     
          <br />
          Is Ship broken:  <input type="checkbox"  name="shipIsBroken"/>
          <br />
          <input type="submit" value="create log" />
        </form>
      </div>
    );
  }
}
module.exports = New;