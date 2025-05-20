export function Tag({ name }: { name: string }) {
  return (
    <div className="rounded-full bg-gray-500 border-1 border-gray-200 text-center p-3 font-bold text-xs">
      {name}
    </div>
  )
}
