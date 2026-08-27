// Minggu 3: komponen reusable Badge (mis. label "Stok Habis")
function Badge({ children, color = "red" }) {
  const colors = {
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-700",
  }
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colors[color] || colors.gray}`}>
      {children}
    </span>
  )
}

export default Badge
