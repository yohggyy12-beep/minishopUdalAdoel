function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-5 py-2.5 rounded-full font-medium transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-amber-500 text-white hover:bg-amber-600 shadow-sm hover:shadow-md focus:ring-amber-300",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md focus:ring-red-400",
  }
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button