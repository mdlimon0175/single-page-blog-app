/*
// Title: Layout
// Description: Application layout
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

export default function Layout({ children }) {
  const year = new Date().getFullYear();
  return (
    <>
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold text-center capitalize">{import.meta.env.VITE_APP_NAME || "CRUD Blog Application"}</h1>
      </header>
      {children}
      <footer className="bg-blue-600 text-white text-center p-6">
        <p>© {year} <span className="capitalize">{import.meta.env.VITE_APP_NAME || "CRUD Blog Application"}</span>. All rights reserved.</p>
      </footer>
    </>
  )
}