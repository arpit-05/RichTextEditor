import React from 'react';
import {DUMMY} from './shared/DUMMY'
import Text from './components/Text'
import Attachments from './components/Attachments'
import Field from './components/Field'
import Action from './components/Action'
import Footer from './components/Footer'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dummy:DUMMY
    }
  }
  render(){
    return(<div>
      <Text dummy={this.state.dummy}/>
      <Attachments dummy={this.state.dummy}/>
      <Field dummy={this.state.dummy}></Field>
      <Action dummy={this.state.dummy}/>
      <Footer dummy={this.state.dummy}/>
    </div>)
  }
}

export default App;
