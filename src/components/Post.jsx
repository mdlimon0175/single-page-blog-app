/*
// Title: Single Post
// Description: Single posts render by this component.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import { useDispatch } from "react-redux";
import { CommonBtn } from "./ui/Buttons";
import { activatedEditMode, addDataToDelete } from "../features/posts/postsSlice";

export default function Post({ data }) {
  const dispatch = useDispatch();
  const { title, content } = data || {};

  return (
    <div className="p-6 bg-white shadow-lg rounded mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{content}</p>
      <div className="flex justify-end mt-4">
        <CommonBtn
          onClick={() => dispatch(activatedEditMode(data))}
          className={"bg-green-600 hover:bg-green-700"}
        >Edit</CommonBtn>
        <CommonBtn
          onClick={() => dispatch(addDataToDelete(data))}
          className={"bg-red-600 hover:bg-red-700"}
        >Delete</CommonBtn>
      </div>
    </div>
  )
}