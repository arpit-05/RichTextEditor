import React from "react";
import { DUMMY } from "./shared/DUMMY";
import Text from "./components/Text";
import Attachments from "./components/Attachments";
import Field from "./components/Field";
import Action from "./components/Action";
import Footer from "./components/Footer";
import AddPhoto from "@material-ui/icons/AddPhotoAlternate";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: DUMMY
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="outer">
            <Text className="text" dummy={this.state.dummy} />
            <div className="Wrapper">
              <Attachments dummy={this.state.dummy} />
              <Field dummy={this.state.dummy} />
              <Action dummy={this.state.dummy} />
              <Footer dummy={this.state.dummy} />
            </div>
          </div>
        </div>
      </div>

      //   <div class="box">
      //   <div></div>
      // </div>
    );
  }
}

export default App;
