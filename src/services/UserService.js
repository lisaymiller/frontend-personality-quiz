import axios from "axios";

const USER_REST_API_URL =
  "https://personality-quiz-wwc.herokuapp.com/user/names";

class UserService {
  getUserNames() {
    return axios.get(USER_REST_API_URL);
  }

  createUserNames(user) {
    return axios.post(USER_REST_API_URL, user);
  }
}

export default new UserService();
