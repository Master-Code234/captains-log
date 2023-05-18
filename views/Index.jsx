const React = require("react");

const myStyle = {
  color: "#fff",
  backgroundColor: "#93032e",
  fontFamily: "Arial",
};

class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>Logs Index Page</h1>
        <ul>
          {this.props.log.map((log, i) => {
            return (
              <li>
                <a style={{ color: "#fff" }} href={`/logs/${log._id}`}>
                  {log.title}
                </a>

                <br />

                <a href={`/logs/${log._id}/edit`}>Edit</a>

                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
        <nav>
          <a href="/logs/New">Create a New Log</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;
