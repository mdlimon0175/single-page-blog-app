/*
// Title: Inpput field.
// Description: for reusability this components created to render different type input field.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

export default function Input({ type, ...attributes}) {
  return (
    <input
      type={type}
      className="form_input"
      {...attributes}
    />
  )
}