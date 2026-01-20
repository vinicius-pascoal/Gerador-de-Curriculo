# Gerador de Currículo Dinâmico

Um aplicativo web moderno para criar, editar e exportar currículos em PDF com múltiplos templates profissionais.

## Funcionalidades

✨ **Editor Visual** - Interface intuitiva para editar dados do currículo
📄 **Preview em Tempo Real** - Visualize seu currículo conforme edita
🎨 **Múltiplos Templates** - Escolha entre estilos Moderno, Clássico ou Minimalista
📥 **Download em PDF** - Exporte seu currículo em formato PDF de alta qualidade
🌙 **Tema Escuro** - Suporte nativo para modo escuro

## Tecnologias Utilizadas

- **Next.js 16** - Framework React moderno
- **TypeScript** - Tipagem segura
- **Tailwind CSS** - Estilização responsiva
- **@react-pdf/renderer** - Geração de PDFs
- **React Hooks** - Gerenciamento de estado

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/vinicius-pascoal/Gerador-de-Curriculo.git

# Instalar dependências
cd Gerador-de-Curriculo
npm install --legacy-peer-deps

# Executar em desenvolvimento
npm run dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

## Como Usar

1. **Preencha seus dados** no formulário do lado esquerdo
   - Nome
   - E-mail
   - Telefone
   - Experiência Profissional
   - Habilidades (separadas por vírgula)

2. **Escolha um template** de sua preferência
   - Moderno
   - Clássico
   - Minimalista

3. **Visualize a prévia** clicando em "Visualizar Prévia"

4. **Baixe em PDF** clicando em "Preparar Download" e depois "Baixar Currículo (PDF)"

## Estrutura do Projeto

```
app/
├── components/
│   ├── PdfDownloadButton.tsx    # Componente para download PDF
│   ├── PreviewPanel.tsx          # Componente de prévia
│   ├── TemplateSelector.tsx      # Seletor de templates
│   └── types.ts                  # Tipos TypeScript
├── layout.tsx                    # Layout principal
├── page.tsx                      # Página principal
└── globals.css                   # Estilos globais
```

## Scripts Disponíveis

```bash
npm run dev    # Executar servidor de desenvolvimento
npm run build  # Construir para produção
npm start      # Executar servidor de produção
npm run lint   # Executar linter
```

## Melhorias Futuras

- 📚 Adicionar mais campos (Educação, Certificações)
- 🎯 Adicionar mais templates
- 💾 Salvar currículos em banco de dados
- 🔐 Sistema de autenticação
- 🌍 Suporte a múltiplos idiomas
- 📱 Melhorias de responsividade móvel

## Licença

MIT © 2026 Vinicius Pascoal

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
