# Woman Personalizados - Landing Page

## Integrantes da dupla
- Israel Lacerda Gomes Santos
- Italo Cordeiro

## Descrição do caso escolhido
O projeto foi desenvolvido para a **Woman Personalizados**, um ateliê de costura criativa e mimos personalizados gerido por uma profissional autônoma (mãe de um dos integrantes da dupla). O negócio opera em âmbito local e pelas redes sociais, oferecendo itens customizados como canecas, camisetas, ecobags e, tendo como sua grande especialidade, as **bolsas e kits estruturados de maternidade**.

## Necessidade identificada
Embora a marca possua atuação ativa e excelente portfólio no Instagram (`@woman_personalizados`), identificou-se a absoluta ausência de uma presença digital estruturada na web. Essa lacuna gerava ruídos de comunicação: as clientes não conseguiam visualizar as peças divididas por nicho (maternidade vs. casual), desconheciam o fluxo de aprovação de um pedido e acabavam sobrecarregando o atendimento com dúvidas repetitivas antes de solicitar um orçamento.

## Público-alvo
O público-alvo são mulheres que buscam bolsas personalizadas, gestantes e mães em busca de malas de maternidade e enxovais seguros e duradouros para a chegada do bebê, além de pessoas físicas procurando presentes com valor emocional para datas comemorativas e microempreendedores que buscam mimos corporativos com a sua marca.

## Objetivo do site
O objetivo central da interface é atuar como uma vitrine de autoridade e afeto que conduza o visitante à conversão humanizada: **iniciar um atendimento direto pelo WhatsApp**, facilitando o envio de referências de tecidos, nomes para bordado ou fotos.

## Processo de desenvolvimento
1. **Imersão e Diagnóstico:** Entrevista com a artesã para mapear sua real necessidade
2. **Arquitetura de Informação:** Definição de uma hierarquia focada no sentimento: Promessa/Nicho (Banner) -> Autoridade/Especialidades (Destaques) -> Conexão Humana (A Artesã) -> Clareza de Processo (Como Encomendar) -> Conversão (WhatsApp).
3. **Desenvolvimento Semântico e Modular:** Codificação em HTML5 estrito, estilização proprietária via CSS Grid/Flexbox e importação da mecânica colapsável do Bootstrap.
4. **Refinamento e Interatividade:** Implementação de JS para dicas contextuais de costura/estamparia e bateria de testes de responsividade.

## Principais decisões do projeto
- **Estrutura HTML e Combate à "Div Soup":** Priorização rigorosa de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`).
- **Organização Visual (Estética Boho Chic):** Adoção de uma paleta orgânica e terrosa (Bege Areia `#f9f6f0`, Terracota `#c87158`, Verde Sálvia `#7a8b76` e Marrom Café `#3d312a`), extraída diretamente das capas de destaque do Instagram da loja. Essa escolha foge de templates corporativos frios e traduz a sensação de linho, algodão e calor do artesanato materno.
- **Tipografia:** Utilização da família clássica e serifada *Georgia* nos títulos para remeter à tradição da costura e conferir um aspecto de produto "premium".
- **Responsividade:** Uso de funções de escalonamento fluido (`clamp()`), unidades relativas e `media queries` nativas, garantindo uma reestruturação de layout perfeita desde telas de 320px até monitores widescreen.
- **Acessibilidade:** Aplicação de textos alternativos (`alt`) descritivos e validados em todas as fotos de produtos, além de rigoroso respeito às taxas de contraste entre tipografia e fundos.

## Funcionalidade em JavaScript
Foi implementada uma funcionalidade interativa de **dicas de ateliê e segredos de personalização**. Ao clicar em qualquer card da seção "Costura criativa e pormenores", o script captura o atributo `data-produto` e atualiza dinamicamente o painel superior (`#mensagem-destaque`) com uma sugestão técnica de costura (ex: sugerindo divisórias impermeáveis no kit maternal ou costura reforçada nas ecobags). A mecânica integra manipulação de DOM, escuta de eventos e delegação de cliques no documento.

## Uso de Bootstrap
O **Bootstrap 5** foi utilizado de forma pontual, introdutória e justificada na construção da **Barra de Navegação Superior (`navbar`)** e em utilitários de contêiner. A escolha justificou-se pela agilidade em obter um menu mobile estável e acessível via botão *toggler* (hambúrguer). Garantimos que o framework não engessasse a identidade da loja, reescrevendo as variáveis de cor, fontes e espaçamentos no nosso CSS externo.

## Testes realizados
- **Responsividade:** Emulada via DevTools em resoluções de 320px, 380px, 600px, 900px e 1200px, certificando a completa legibilidade e ausência de barras de rolagem horizontais.
- **Acessibilidade:** Teste de navegação sequencial por teclado (tecla `Tab`), confirmando que os links da navbar e os botões de ação recebem o contorno de foco visual (`outline`).
- **Links e Carregamento:** Validação do link dinâmico da API do WhatsApp contendo mensagem de saudação pré-formatada e teste de tempo de renderização das imagens externas.

## Links
- Link do repositório: https://github.com/raelLacerdaDev/women_personalizados/tree/main
- Link do site publicado: https://raellacerdadev.github.io/women_personalizados/
- Link das provas: https://github.com/raelLacerdaDev/women_personalizados/wiki/Processo-de-constru%C3%A7%C3%A3o-(screenshots)

## Contribuição dos integrantes
- **Israel Lacerda Gomes Santos:** Responsável pelo levantamento de requisitos com a loja, estruturação do HTML semântico,
criação do readme e responsável pelos testes de responsividade. 
- **Italo Cordeiro:** Responsável pela estilização completa do layout em CSS (Grid/Flexbox), implementação do algoritmo de interatividade em JavaScript.
