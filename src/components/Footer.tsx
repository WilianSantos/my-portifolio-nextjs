import Link from 'next/link'

export function Footer() {
  return (
    <footer className="p-6">
      <div className="flex items-center justify-start text-base gap-2 text-white">
        <span>
          Design baseado em template de
          <Link href="https://themeforest.net/user/uiaxis"> UIAXIS</Link>
        </span>
        &copy; 2025 Wilian Soares dos Santos. Todos os direitos reservados.
      </div>
    </footer>
  )
}
