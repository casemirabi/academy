# 🏋️ Academia Performance - Mogi das Cruzes

Site institucional moderno e responsivo para a Academia Performance, desenvolvido com React, TypeScript e Tailwind CSS.

## 🎯 Sobre o Projeto

Site institucional completo com foco em conversão e experiência do usuário, incluindo:

- **Landing Page** moderna com hero banner e call-to-action
- **Modalidades** com cards interativos e horários
- **Quem Somos** com missão, visão e valores
- **Depoimentos** de alunos para credibilidade
- **Planos** detalhados com preços e benefícios
- **Contato** com formulário integrado ao WhatsApp
- **Design responsivo** otimizado para todos os dispositivos

## 🚀 Como rodar no GitHub Pages

### 1. Preparar o repositório

```bash
# Clone ou baixe este projeto
git clone [URL_DO_SEU_REPOSITORIO]
cd academia-performance

# Instale as dependências
npm install
```

### 2. Configurar para GitHub Pages

Adicione estas configurações no `package.json`:

```json
{
  "homepage": "https://[SEU_USUARIO].github.io/[NOME_DO_REPOSITORIO]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### 4. Configurar Vite para GitHub Pages

Crie/edite o arquivo `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/[NOME_DO_REPOSITORIO]/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### 5. Deploy para GitHub Pages

```bash
# Build e deploy
npm run deploy
```

### 6. Configurar GitHub Pages no repositório

1. Vá para **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **Deploy from a branch**
3. Escolha a branch **gh-pages**
4. Clique em **Save**

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
academia-performance/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Modalidades.tsx
│   │   ├── QuemSomos.tsx
│   │   ├── Depoimentos.tsx
│   │   ├── Planos.tsx
│   │   ├── Contato.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna e rápida
- **Lucide React** - Ícones modernos e consistentes

## 📱 Recursos

### Design Responsivo
- **Mobile First** - Otimizado para dispositivos móveis
- **Breakpoints** - sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System** - Layout flexível e adaptável

### SEO Otimizado
- Meta tags completas
- Open Graph para redes sociais
- Estrutura semântica HTML5
- Performance otimizada

### Interações
- Navegação suave entre seções
- Hover states em todos os elementos interativos
- Animações de transição elegantes
- Formulário integrado com WhatsApp

## 🔧 Personalização

### Cores do Tema
```css
/* Cores principais */
--orange-500: #f97316;  /* Cor primária */
--gray-900: #111827;    /* Cor secundária */
--green-500: #10b981;   /* Sucesso/WhatsApp */
```

### Contatos
Para personalizar os contatos, edite os arquivos:
- `src/components/Header.tsx` - Link do WhatsApp no menu
- `src/components/Contato.tsx` - Informações de contato
- `src/components/Footer.tsx` - Rodapé com contatos

### Conteúdo
- **Modalidades**: `src/components/Modalidades.tsx`
- **Planos**: `src/components/Planos.tsx`
- **Depoimentos**: `src/components/Depoimentos.tsx`
- **Sobre**: `src/components/QuemSomos.tsx`

## 📞 Integração WhatsApp

O site está configurado para redirecionar contatos para o WhatsApp. Para personalizar:

1. Substitua `5511999999999` pelo número real da academia
2. O formato deve ser: `55` + `DDD` + `número`
3. Links estão em: Header, Hero, Modalidades, Planos e Contato

## 🌐 Deploy Alternativo

### Netlify
1. Conecte seu repositório GitHub ao Netlify
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Vercel
1. Importe o projeto do GitHub
2. Vercel detecta automaticamente as configurações do Vite

## 📈 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Imagens otimizadas** do Pexels
- **Lazy loading** automático
- **Bundle size** otimizado

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:
- 📧 Email: contato@academiaperformance.com.br
- 📱 WhatsApp: (11) 99999-9999
- 📍 Endereço: Rua das Flores, 123 - Centro, Mogi das Cruzes/SP

---

**Desenvolvido com ❤️ para transformar vidas através do fitness**