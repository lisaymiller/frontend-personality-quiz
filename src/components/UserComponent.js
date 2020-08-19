import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircleRounded } from "@material-ui/icons";
import UserService from "../services/UserService";
import { Typography, Button, Grid, TextField } from "@material-ui/core";

class UserComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.userChange = this.userChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.submitUser = this.submitUser.bind(this);
  }

  userChange = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
    console.log("name:" + this.state.name);
  };

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.name);
    this.submitUser();
  }
  // componentDidMount() {
  //   if (this.props.name) {
  //     this.setState({
  //       name: this.props.name,
  //     });
  //   }
  // }
  saveUser = (event) => {
    this.setState({ name: event.target.value });
  };

  submitUser = () => {
    // event.preventDefault();
    const user = { userName: this.state.name };
    axios.post("http://localhost:8080/user/names", user);
    //  let name = this.state;
    // UserService.createUserNames(name).then((response) => {
    //   this.props.history.push("names");
    // });
  };

  // using this yt video https://www.youtube.com/watch?v=ieMhlyjPjWo

  // userList = () => {
  //   return this.props.history.push("names");
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let name = this.state.name;
  //   UserService.createUserNames(name).then((response) => {
  //     this.props.history.push("addUser");
  //   });
  //   this.setState({ name: "" });
  //   console.log(this.state.name);
  // };

  render() {
    return (
      <div>
        {/* <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Username"
            onChange={this.saveUser}
          />
          <Button onClick={this.submitUser}></Button>
        </Grid> */}
        {/* <Grid item> */}
        <TextField
          id="input-with-icon-grid"
          label="Username"
          onChange={this.saveUser}
        />
        {/* <Button onClick={this.submitUser}></Button> */}
        {/* </Grid> */}

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/quiz"
          onClick={this.submitUser}
        >
          Take Quiz
        </Button>
      </div>
    );
  }
}

export default UserComponent;
