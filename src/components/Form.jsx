/*
// Title: Form
// Description: Application posts create and edit form handled by this component.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import { useDispatch, useSelector } from "react-redux"
import { useStoreOrUpdatePostMutation } from "../features/posts/postsApi";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import { AlertText } from "./ui/AlertText";
import { useEffect, useState } from "react";
import { CommonBtn } from "./ui/Buttons";
import { deactivatedEditMode } from "../features/posts/postsSlice";

export default function Form() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({});
  const { editMode, dataToEdit } = useSelector(state => state.posts);
  const [storeOrUpdatePost, { data, isLoading, isError, isSuccess, error, reset }] = useStoreOrUpdatePostMutation();

  useEffect(() => {
    if(dataToEdit) {
      setFormData(dataToEdit);
    }
  }, [dataToEdit]);

  useEffect(() => {
    if(isSuccess && data) {
      setFormData({});
      dispatch(deactivatedEditMode());
      setMessage(editMode ? "Post edited successfully!" : "Post added successfully!");
      setTimeout(() => {
        reset();
        setMessage("");
      }, 2000);
    }

    if(isError) {
      setMessage(error.message);
    }
  }, [isSuccess, data, isError]);

  const formDataHandler = e => {
    if(e.target.type === "text") {
      setFormData({...formData, [e.target.name]: e.target.value});
    } else if(e.target.type === "textarea") {
      setFormData({...formData, [e.target.name]: e.target.value});
    } else {
      console.log(`new unknown event - ${e.target.type}`);
    }
  }

  const formHandler = e => {
    e.preventDefault();
    const data = {
      url: editMode ? `posts/${formData.id}` : "posts",
      data: formData,
      method: editMode ? "PUT" : "POST"
    };
    storeOrUpdatePost(data);
  }
  
  return (
    <section className="container mx-auto mt-8 px-6">
      <h2 className="text-xl font-bold mb-4">Create New Post</h2>
      <form className="mb-8" onSubmit={formHandler}>
        <Input 
          type={"text"}
          name={"title"}
          value={formData?.["title"] || ""}
          onChange={formDataHandler}
          placeholder={"post title"}
          required={true}
        />
        <Textarea 
          name={"content"}
          placeholder={"post content"}
          value={formData?.["content"] || ""}
          onChange={formDataHandler}
          required={true}
        />
        {
          isError && message ? 
            <AlertText type={"error"} message={message} />
          : isSuccess && message ? 
            <AlertText type={"success"} message={message} />
          : 
          null
        }
        <CommonBtn
          type={"submit"}
          disabled={isLoading}
          className={"bg-blue-600 hover:bg-blue-700"}
        >{editMode ? "Edit post" : "Create Post"}</CommonBtn>
        {editMode && 
          <CommonBtn
            className={"bg-red-600 hover:bg-red-700"}
            onClick={() => dispatch(deactivatedEditMode())}
          >cancel</CommonBtn>
        }
      </form>
    </section>
  )
}