import Link from 'next/link'

export function Footer() {
  return (
    <footer className="p-6">
      <div className="flex items-center justify-between lg:justify-start text-base w-full gap-2 text-white">
        <span className="hidden sm:hidden md:block lg:block">
          Design baseado em template de
          <Link href="https://themeforest.net/user/uiaxis"> UIAXIS</Link>
        </span>
        <span className="block md:hidden lg:hidden">
          Design de
          <Link href="https://themeforest.net/user/uiaxis"> UIAXIS</Link>
        </span>
        &copy; 2025 Wilian S. Santos. Todos os direitos reservados.
      </div>
    </footer>
  )
}
