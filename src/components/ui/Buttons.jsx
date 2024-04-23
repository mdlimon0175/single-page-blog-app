/*
// Title: Buttons
// Description: A application can have different type buttons. So this components can export different type buttons.
// Author: Kiam Khan Limon
// Author email: mdlimon0175@gmail.com
// version: 1.0
// Date: 4/23/2024
*/

export function CommonBtn({ type, children, className, onClick, disabled }) {
  return (
    <button 
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled ?? false}
      className={`common_btn ${className}`}
    >
      {children}
    </button>
  )
}
