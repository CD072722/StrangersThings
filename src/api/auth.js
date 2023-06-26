// Cohort used for the database
const cohort = "2303-FTB-MT-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const { data: { token } } = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};

//User login
export const loginUser = async (username, password) => {

  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    return result.data.token;

  } catch (err) {
    alert("Log in unsuccessful")
    console.error(err);
  }
}

//Fetch user information
export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("result from fetchme", result) //shows username and stuff 
    console.log("messages", result.data.messages)
    return result;
  } catch (error) {
    console.error(error);
  }
};

//User logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.clear();
  
};