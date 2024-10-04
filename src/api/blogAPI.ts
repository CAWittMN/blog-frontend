import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { PayLoad } from "../types/types";

const BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3005";

/**
 * API to interact with the Blog Backend
 */
class BlogAPI {
  static token: any;
  static isAdmin: boolean;
  static username: string | null;

  static async request(endpoint: string, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err: any) {
      console.error("API Error:", err);
      let message: any = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static decodeTokenAndLoadApi(token: any) {
    this.token = token;
    const { username, isAdmin } = jwtDecode<PayLoad>(token);
    this.username = username;
    this.isAdmin = isAdmin;
    return { username, isAdmin };
  }

  static async register(data: {}) {
    let res = await this.request(`auth/register`, data, "post");
    const token = res.token;
    const { username, isAdmin } = this.decodeTokenAndLoadApi(token);
    return { username, isAdmin, token };
  }

  static async login(data: {}) {
    let res = await this.request(`auth/login`, data, "post");
    const token = res.token;
    const { username, isAdmin } = this.decodeTokenAndLoadApi(token);
    return { username, isAdmin, token };
  }

  static async logout() {
    this.token = null;
    this.isAdmin = false;
    this.username = null;
  }

  static async getBlogPost(postId: number) {
    let res = await this.request(`blog/${postId}`);
    return res.blog;
  }

  static async getAllBlogPosts() {
    let res = await this.request(`blog/all`);
    return res.blogs;
  }

  static async postComment(postId: number, data: {}) {
    let res = await this.request(
      `blog/${postId}/comment/${this.username}`,
      data,
      "posts"
    );
    return res;
  }

  static async likePost(postId: number) {
    let res = await this.request(`blog/${postId}/like/${this.username}`);
    return res;
  }

  static async getUserInfo() {
    let res = await this.request(`user/${this.username}`);
    return res.user;
  }

  static async createBlogPost(data: {}) {
    if (!this.isAdmin) throw Error("Unauthorized!");
    let res = await this.request(`blog/create`, data, "post");
    return res;
  }
}

export default BlogAPI;
