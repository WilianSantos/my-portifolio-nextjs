export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center justify-start text-gray-100 bg-gray-300 border-1 border-gray-300 hover:bg-gray-500 hover:border-green-400">
      {children}
    </div>
  )
}
