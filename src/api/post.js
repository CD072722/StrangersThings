// Cohort used for the database
const cohort = "2303-FTB-MT-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

//Fetch  all of the posts
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`)
    const result = await response.json();
    console.log("result from fetchPosts", result)
    return result
  } catch (err) {
    console.error(err);
  }
}

//Make a post
export const makePost = async (token, title, description, price, location, willDeliver) => {

  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver
        }
      })
    });
    const result = await response.json();

    return result
  } catch (err) {
    console.error(err);
  }
}

//Delete a post owned by the user
export const deletePost = async (id) => {
  const token = localStorage.getItem("token")
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result
  } catch (err) {
    console.error(err);
  }
}
