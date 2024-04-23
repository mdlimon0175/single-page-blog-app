/*
// Title: Loader for single post.
// Description: Loader is most use component in a application. 
  Here we just working for posts only so we keep only post loader.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

export default function PostLoader() {
  return (
    <div className="animate-pulse">
      <div className="p-6 bg-white shadow-lg rounded mb-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
        <div className="flex justify-end mt-4">
          <div className="h-8 bg-gray-300 rounded px-4 py-2 mr-2"></div>
          <div className="h-8 bg-gray-300 rounded px-4 py-2"></div>
        </div>
      </div>
    </div>
  )
}