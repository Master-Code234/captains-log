const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Logs Index Page</h1>
        <ul>
          {this.props.log.map((logs, i) => {
            return (
              <li>
               <a href={`/logs/Show"${logs.id}`}>{logs.title}</a>
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
