/*
// Title: Textarea input field.
// Description: Textarea input field for reusability.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

export default function Textarea({...attributes}) {
  return (
    <textarea className="form_input" rows="3" {...attributes}></textarea>
  )
}
