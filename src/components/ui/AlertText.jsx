/*
// Title: AlertText
// Description: To show message to user it will help us.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import { useDispatch, useSelector } from "react-redux"
import { CommonBtn } from "./Buttons"
import { removeDataToDelete } from "../../features/posts/postsSlice"
import { useDeletePostMutation } from "../../features/posts/postsApi"
import { useEffect, useState } from "react"

export function AlertText({ type, message }) {
  const alertType = () => {
    if(type === "success") {
      return "text-green-600"
    } else if(type === "not-found") {
      return "text-gray-600"
    } else {
      return "text-red-600"
    }
  }

  return (
    <div className="p-2 bg-white shadow-lg rounded mb-4">
      <p className={alertType()}>{message}</p>
    </div>
  )
}

export function AlertTextBox({ type, message }) {
  const alertType = () => {
    if(type === "success") {
      return "text-green-600"
    } else if(type === "not-found") {
      return "text-gray-600"
    } else {
      return "text-red-600"
    }
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded mb-4">
      <p className={alertType()}>{message}</p>
    </div>
  )
}

export function AlertTextDeleteModal() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { dataToDelete } = useSelector(state => state.posts);
  const [deletePost, { isLoading, isError, isSuccess, reset }] = useDeletePostMutation();

  const messageHandler = () => {
    setTimeout(() => {
      setMessage("");
      reset();
      dispatch(removeDataToDelete());
    }, 2000);
  }

  useEffect(() => {
    if(isLoading) {
      setMessage("Please wait...");
    } else {
      setMessage("");
    }

    if(isError) {
      setMessage("failed to delete post!");
      messageHandler();
    }
    if(isSuccess) {
      setMessage("Post deleted successfully!");
      messageHandler();
    }
  }, [isLoading, isError, isSuccess]);

  return (
    <>
      {/* modal overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      {/* main modal */}
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-700" id="modal-title">
                  {dataToDelete.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {message || "Are you sure to delete this post?"}
                </p>
              </div>
              <div className="px-4 py-3 sm:px-6 flex sm:justify-end justify-center">
                {!isSuccess && 
                  <CommonBtn
                    className={"py-1 bg-gray-600 hover:bg-gray-700"}
                    onClick={() => dispatch(removeDataToDelete())}
                  >cancel</CommonBtn>
                }
                {!isLoading && !isError && !isSuccess && 
                  <CommonBtn
                    className={"py-1 bg-red-600 hover:bg-red-700"}
                    onClick={() => deletePost(dataToDelete.id)}
                  >yes, confirm</CommonBtn>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}