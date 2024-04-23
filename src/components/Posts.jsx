/*
// Title: Posts list container
// Description: All posts fetch here and map the array of data to render individual post components.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

import { useGetPostsQuery } from "../features/posts/postsApi";
import Post from "./Post";
import { AlertTextBox, AlertTextDeleteModal } from "./ui/AlertText";
import PostLoader from "./ui/PostLoader";
import { useSelector } from "react-redux";

export default function Posts() {
  const { showDeleteModal } = useSelector(state => state.posts);
  const { data, isLoading, isError, error } = useGetPostsQuery();

  const renderContent = () => {
    if(isLoading && !isError) {
      return (
        <>
          <PostLoader />
          <PostLoader />
        </>
      )
    } else if(!isLoading && isError) {
      return <AlertTextBox message={error.message} type={"error"} />
    }
    if(data && data.length === 0) {
      return <AlertTextBox message={"Sorry recently we have no post! Can you add new post? Please."} type={"not-found"} />
    }
    return data.map(post => {
      return <Post key={post.id} data={post} />
    })
  }

  return (
    <section className="container mx-auto px-6">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <div className="mb-8">
        {renderContent()}
      </div>
      {showDeleteModal && <AlertTextDeleteModal />}
    </section>
  )
}