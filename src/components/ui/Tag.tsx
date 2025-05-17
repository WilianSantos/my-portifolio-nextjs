export function Tag({ name }: { name: string }) {
  return (
    <div className="rounded-2xl bg-blue-50 text-center p-1 font-bold text-xs">
      {name}
    </div>
  )
}
