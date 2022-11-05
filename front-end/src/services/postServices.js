import axios from "axios";

class Post {
  static async createPost(formData) {
    return await axios.post("http://localhost:3001/api/v1/posts", formData);
  }
  static async getPosts() {
    return await axios("http://localhost:3001/api/v1/posts");
  }
  static async deletePost(id) {
    return await axios.delete("http://localhost:3001/api/v1/posts/" + id);
  }
}
export default Post;
