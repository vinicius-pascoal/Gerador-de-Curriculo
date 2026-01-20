"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sobre</h3>
            <p className="text-gray-400">
              Gerador de Currículo Dinâmico - Crie currículos profissionais de forma rápida e
              fácil com múltiplos templates.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://github.com/vinicius-pascoal" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:contact@example.com" className="hover:text-white transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Gerador de Currículo Dinâmico. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com ❤️ por{" "}
            <a href="https://github.com/vinicius-pascoal" className="hover:text-white transition">
              Vinicius Pascoal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
