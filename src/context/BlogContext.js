import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogposts");
      dispatch({ type: "get_blogpost", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callBack) => {
    try {
      await jsonServer.post("/blogposts", { title, content });
    } catch (e) {
      console.log(e);
    }
    if (callBack) callBack();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: "delete_blogpost", payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callBack) callBack();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
