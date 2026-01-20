# Gerador de Currículo Dinâmico

Um aplicativo web moderno e profissional para criar, editar e exportar currículos em PDF com múltiplos templates estilizados e categorias personalizáveis.

## ✨ Funcionalidades

### 🎨 Design Profissional
- **3 Templates Premium** - Moderno, Clássico e Minimalista com estilos únicos
- **Preview em Tempo Real** - Visualize seu currículo conforme edita
- **Interface Moderna** - Editor visual com ícones e gradientes elegantes
- **Totalmente Responsivo** - Funciona perfeitamente em qualquer dispositivo

### 📝 Gerenciamento de Conteúdo
- **Categorias Personalizadas** - Adicione seções como Formação, Certificações, Projetos, Idiomas, etc.
- **Itens Detalhados** - Cada categoria suporta múltiplos itens com:
  - Título
  - Subtítulo (empresa, instituição)
  - Período/Data
  - Localização
  - Descrição completa
- **Reordenação Fácil** - Mova itens para cima/baixo dentro de cada categoria
- **Campos Principais** - Nome, e-mail, telefone, resumo profissional, experiência e habilidades

### 📥 Exportação Avançada
- **PDF de Alta Qualidade** - Geração profissional com estilos diferenciados por template
- **Template-Aware** - O PDF reflete o estilo escolhido (cores, fontes, layouts)
- **Formatação Inteligente** - Texto justificado, espaçamentos adequados e hierarquia visual

### 🌙 Experiência do Usuário
- **Modo Escuro** - Suporte completo para tema escuro
- **Animações Suaves** - Transições elegantes em toda interface
- **Carregamento Preguiçoso** - PDF renderizado apenas quando necessário

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

## 🎨 Templates Disponíveis

### 🌟 Moderno
- Cabeçalho com gradiente azul e branco
- Títulos de seção em azul com bordas
- Cards com fundo azul claro para categorias
- Habilidades em formato de tags coloridas
- Visual contemporâneo e chamativo

### 📜 Clássico
- Cabeçalho com borda preta tradicional
- Tipografia serifada elegante
- Títulos em uppercase com espaçamento
- Bordas cinzas sutis
- Aparência formal e profissional

### ⚡ Minimalista
- Design limpo e objetivo
- Tipografia leve e espaçosa
- Bordas finas e discretas
- Títulos em uppercase com amplo tracking
- Foco total no conteúdo

## 🛠 Tecnologias Utilizadas

- **Next.js 16.1** - Framework React com Turbopack
- **TypeScript 5** - Tipagem estática e segurança
- **Tailwind CSS 4** - Estilização utility-first moderna
- **@react-pdf/renderer 4.1** - Geração profissional de PDFs
- **React 19** - Biblioteca UI mais recente
- **React Hooks** - Gerenciamento de estado eficiente

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/vinicius-pascoal/Gerador-de-Curriculo.git

# Navegar para o diretório
cd Gerador-de-Curriculo

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

## 🚀 Como Usar

### 1. Escolha um Template
Selecione entre os 3 templates disponíveis no topo do editor:
- **Moderno** - Para um visual contemporâneo e vibrante
- **Clássico** - Para uma apresentação tradicional e elegante  
- **Minimalista** - Para um design limpo e objetivo

### 2. Preencha Informações Básicas
- **Nome Completo** - Seu nome como aparecerá no currículo
- **E-mail** - Endereço de e-mail profissional
- **Telefone** - Número de contato
- **Resumo Profissional** - Um breve parágrafo sobre você
- **Experiência Profissional** - Descrição de suas experiências
- **Habilidades** - Lista separada por vírgulas (ex: JavaScript, React, Node.js)

### 3. Adicione Categorias Personalizadas
Clique em "Nova Categoria" para adicionar seções como:
- 🎓 Formação Acadêmica
- 📜 Certificações
- 💼 Projetos
- 🌍 Idiomas
- 📚 Cursos e Treinamentos
- 🤝 Voluntariado
- 📝 Publicações
- 🏆 Prêmios e Reconhecimentos

### 4. Adicione Itens às Categorias
Para cada categoria, adicione itens com:
- **Título** - Nome do curso, projeto, idioma, etc.
- **Subtítulo** - Instituição, empresa, nível
- **Período** - Datas de início e fim
- **Local** - Cidade, estado ou país
- **Descrição** - Detalhes adicionais relevantes

### 5. Visualize e Baixe
- Clique em "👁️ Visualizar Prévia" para ver o resultado
- Clique em "📄 Preparar Download" para carregar o gerador de PDF
- Clique em "📥 Baixar PDF" para obter seu currículo

## 📁 Estrutura do Projeto

```
Gerador-de-Curriculo/
├── app/
│   ├── components/
│   │   ├── CategoryManager.tsx     # Gerenciador de categorias
│   │   ├── Footer.tsx              # Rodapé da aplicação
│   │   ├── PdfDownloadButton.tsx   # Botão de download com geração de PDF
│   │   ├── PreviewPanel.tsx        # Painel de visualização
│   │   ├── TemplateSelector.tsx    # Seletor de templates
│   │   ├── types.ts                # Tipos TypeScript
│   │   └── validation.tsx          # Validações de formulário
│   ├── config/
│   │   └── curriculum.ts           # Configurações padrão
│   ├── globals.css                 # Estilos globais
│   ├── layout.tsx                  # Layout principal
│   └── page.tsx                    # Página principal
├── public/                         # Arquivos públicos
├── eslint.config.mjs              # Configuração ESLint
├── next.config.ts                 # Configuração Next.js
├── package.json                   # Dependências
├── postcss.config.mjs             # Configuração PostCSS
├── tailwind.config.ts             # Configuração Tailwind
└── tsconfig.json                  # Configuração TypeScript
```

## 🎯 Próximas Funcionalidades

- [ ] Importação de dados de LinkedIn
- [ ] Mais templates (Criativo, Executivo, Tech)
- [ ] Suporte a múltiplos idiomas
- [ ] Salvamento em nuvem
- [ ] Compartilhamento via link
- [ ] Análise de ATS (Applicant Tracking System)
- [ ] Sugestões de IA para melhorar o conteúdo

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

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
