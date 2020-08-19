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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  saveUser = (event) => {
    this.setState({ name: event.target.value });
  };

  submitUser = () => {
    const user = { userName: this.state.name };
    axios.post("https://personality-quiz-wwc.herokuapp.com/user/names", user);
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
                onClick={this.handleSubmit}
                component={Link}
                to="/quiz"
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
