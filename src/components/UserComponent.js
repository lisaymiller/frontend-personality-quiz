import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircleRounded } from "@material-ui/icons";

class UserComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.userChange = this.userChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  userChange = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  saveUser = (event) => {
    this.setState({ name: event.target.value });
  };

  submitUser = (event) => {
    event.preventDefault();
    const user = { username: this.state.name };
    axios.post("https://personality-quiz-wwc.herokuapp.com/user/names", user);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircleRounded />
            </Grid>

            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Username"
                value={this.state.name}
                onChange={this.userChange}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={this.submitUser}
              >
                Take Quiz
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default UserComponent;
