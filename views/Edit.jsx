const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
   
          <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
          title: <input type="text" name="title" defaultValue={this.props.logs.title}/><br/>
          entry: <input type="text" name="entry"  defaultValue={this.props.logs.entry}/><br/>
          Is Ship Broken:
              { this.props.logs.shipIsBroken ? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;