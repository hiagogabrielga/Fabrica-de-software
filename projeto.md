<img src='/img/logo.png' alt='logo da empresa' width='90px' heidth='90px'/>

# *Web Cars*

# PROJETO DE SOFTWARE

## *Stakeholders*
|NOME|CARGO|E-MAIL|
|:---|:---|:---|
|Carlos Eduardo Gomes de Oliveira|Gerente de Projeto|o.carlos@estudante.ifro.edu.br|
|Hiago Gabriel Gonçalves André|Gerente de Projeto|hiago.g@estudante.ifro.edu.br|
|Júlia de Abreu Alves|Gerente de Projeto|julia.abreu@estudante.ifro.edu.br|
|Maria Eduarda de Sousa de Oliveira|Gerente de Projeto|eduarda.sousa@estudante.ifro.edu.br|
|Nathan Teixeira Lopes|Gerente de Projeto|lopes.teixeira@estudante.ifro.edu.br|
|Vitor Gabriel Capelleto|Gerente de Projeto|capelleto.gabriel@estudante.ifro.edu.br|


# Sumário

* [RESUMO DO PROJETO](#resumo-do-projeto)
* [INTRODUÇÃO](#introdução)
  * [PROPÓSITO DESTE DOCUMENTO](#propósito-deste-documento)
* [DESCRIÇÃO GERAL](#descrição-geral)
  * [USUÁRIOS DO SISTEMA](#usuários-do-sistema)
  * [ABRANGÊNCIA E SISTEMAS SIMILARES](#abrangência-e-sistemas-similares)
  * [SUPOSIÇÕES E DEPENDÊNCIAS](#suposições-e-dependências)
* [METODOLOGIA ADOTADA NO DESENVOLVIMENTO](#metodologia-adotada-no-desenvolvimento)
* [REQUISITOS DO SOFTWARE](#requisitos-do-software)
  * [REQUISITOS FUNCIONAIS](#requisitos-funcionais)
  * [REQUISITOS NÃO FUNCIONAIS](#requisitos-não-funcionais)
* [PROTOTIPAGEM](#prototipagem)
* [DIAGRAMA DE CASOS DE USO](#diagrama-de-casos-de-uso)
* [DIAGRAMA DE CLASSES](#diagrama-de-classes)
* [REFERÊNCIAS](#referências)


# RESUMO DO PROJETO
| ITEM | DESCRIÇÃO|
|:---|:---|
| NOME DO PROJETO | Web cars|
| GERENTE DO PROJETO | Wagner Ferreira |
| PRINCIPAL OBJETIVO | Fornecer uma forma de auxiliar concessionárias locais com um repositório de carros. |
| BENEFÍCIOS ESPERADOS |* Maior alcance de vendas;<br/>* Apresentar maior variedades para clientes;|
| INÍCIO E TÉRMINO PREVISTOS | 14/03/2023 - 07/12/2023 |

[ [INÍCIO](#Web-Cars) ]

# INTRODUÇÃO

## PROPÓSITO DESTE DOCUMENTO

Este documento destina-se aos clientes, engenheiros, gerentes e demais stakeholders deste projeto. O propósito deste documento é apresentar a descrição dos serviços e funções que o sistema Web Cars deve prover, bem como as suas restrições de operação e propriedades gerais, a fim de ilustrar uma descrição detalhada do sistema para um auxílio durante as etapas de análise, projeto e testes. O documento especifica todos os requisitos funcionais e não funcionais do sistema e contém a prototipagem, além de diagramas UML que foram construídos levando-se em conta as funcionalidades identificadas durante a fase de concepção do sistema.

[ [INÍCIO](#Web-Cars) ]

# DESCRIÇÃO GERAL

## Usuários do sistema
|USUÁRIO|DESCRIÇÃO|
|:---|:---|
|**Usuário Padrão:**|Realizam as tarefas comuns a todos os usuários, tal como: logar e enviar mensagens. Todos demais usuários estendem as funcionalidades do UsuárioPadrão|
|**Administrador:**|Responsáveis pelo gerenciamento das entidades pertinentes à instituição e pela alocação de outros administradores|
|**Coordenador:**|Responsáveis pela aprovação de disciplinas, turmas e matrículas realizadas pela secretaria do curso, além de ser responsável pela alocação da secretaria|
|**Secretaria:**|Responsáveis pelo cadastramento de disciplinas e turmas, pela alocação de professores e monitores de um curso e matrículas dos alunos|
|**Professor:**|Responsáveis pela criação do programa da disciplina através de ferramentas de planejamento e criação de atividades|
|**Aluno:**|Seguem o programa da disciplina criada pelo professor, tendo como apoio ferramentas de comunicação, tal como: chat e fórum|


[ [INÍCIO](#Web-Cars) ]

# Metodologia Adotada no Desenvolvimento


[ [INÍCIO](#Web-Cars) ]

# Requisitos do Software

A especificação dos requisitos deste documento deve seguir as recomendações da norma IEEE Std-830-1998, levando em conta as recomentações do documento de [características dos requisitos](caracteristicas_requisitos.md).

## Requisitos Funcionais

A tabela a seguir contém a relação dos Requisitos Funcionais elicitados, com as colunas: identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
:---|:---|:---|
| RF-001 | Criar, trocar, fazer login, excluir conta de cliente ou vendedor autônomo | Para criar uma conta, o cliente precisará fornecer nome completo, CPF, número de telefone, e-mail, e criar e definir uma senha. A conta será usada automaticamente ao abrir o site, caso o usuário não tenha feito logout. Para fazer login na conta, será necessário CPF ou e-mail e senha. Para excluir a conta, será necessário CPF ou e-mail, senha e confirmação por e-mail, onde será perguntado se o usuário realmente deseja excluir a conta. Caso seja confirmado, a conta será excluída. Para trocar de conta, haverá um botão no canto inferior direito. Ao clicar nele, será exibido um aviso perguntando se o usuário deseja realmente trocar de conta, e ao apertar "Sim", o logout será realizado e a janela de login será exibida para adicionar uma nova conta. |
| RF-002 | Criar, trocar, fazer login, excluir conta de concessionária | Para criar uma conta, a concessionária precisará fornecer o nome da empresa, CNPJ, número de telefone, e-mail, localização, e criar e definir uma senha. A conta será usada automaticamente ao abrir o site, caso o usuário não tenha feito logout. Para fazer login na conta, será necessário CNPJ ou e-mail e senha. Para excluir a conta, será necessário CNPJ ou e-mail, senha e confirmação por e-mail, onde será perguntado se a concessionária realmente deseja excluir a conta. Caso seja confirmado, a conta será excluída. Para trocar de conta, haverá um botão no canto inferior direito. Ao clicar nele, será exibido um aviso perguntando se o usuário deseja realmente trocar de conta, e ao apertar "Sim", o logout será realizado e a janela de login será exibida para adicionar uma nova conta. |
| RF-003 | Apresentar produtos mais populares ao entrar | Assim que o usuário entrar no site, ele verá os produtos mais populares daquele momento. Será exibida a imagem do produto, com o nome, marca e ano. Abaixo, deverá ser mostrado o preço em verde. Caso o produto esteja em desconto, o valor anterior deve estar acima, com tamanho inferior e riscado, com a porcentagem de desconto ao lado. |
| RF-004 | Apresentar informações mais detalhadas do produto | Quando o usuário clicar no anúncio do produto, ele será levado à página do produto, onde serão apresentados os dados do produto, como modelo, marca, ano, entre outros. Também deverá ser especificado se o produto é novo ou usado. |
| RF-005 | Pesquisar produtos | Deverá haver uma barra de pesquisa na parte superior central, onde o usuário poderá digitar o nome, ano ou marca do produto desejado. Também deverão ser incluídos filtros para facilitar a busca, como faixa de preço, faixa de ano, e a opção de especificar se deseja comprar um produto novo ou usado. |
| RF-006 | Fornecer recomendações personalizadas para clientes | Permitir que os usuários personalizem suas preferências de recomendação para uma experiência mais individualizada. |
| RF-007 | Adicionar produtos ao repositório | As concessionárias ou vendedores autônomos devem ter a capacidade de adicionar seus produtos ao repositório. Para cada produto, devem ser fornecidas as seguintes informações obrigatórias: descrição detalhada do produto, dados técnicos e especificações relevantes. Devem ser incluídas pelo menos quatro fotos de alta qualidade, capturando o produto de diferentes ângulos, para que os clientes possam visualizar todos os detalhes importantes. |
| RF-008 | Integrar o sistema com GPS | Fornecer uma ferramenta para mostrar a localização das concessionárias que estão vendendo o veículo e fornecer rotas diretas para visitação dos clientes. Vendedores autônomos terão a opção de escolher se desejam ou não fornecer sua localização, sendo avisados dos riscos. |
| RF-009 | Criar listas de desejos | Possibilitar que os usuários criem listas de desejos, salvando itens para compras futuras. Incluir a opção de compartilhar listas de desejos, facilitando a interação e recomendações entre usuários. |
| RF-010 | Personalizar o perfil | Permitir que os usuários personalizem seus perfis com informações adicionais, como preferências de veículos, marcas favoritas, entre outros. Utilizar essas informações para aprimorar recomendações e proporcionar uma experiência personalizada. |
| RF-011 | Possibilitar avaliações e comentários | Permitir que os usuários deixem avaliações e comentários nos produtos, enriquecendo a experiência de compra. Apresentar uma média de avaliações na página do produto para orientar as decisões de compra. |
| RF-012 | Possibilitar avaliações de concessionárias | Disponibilizar um sistema de avaliação para as concessionárias, permitindo que os clientes expressem suas experiências. Utilizar essas avaliações para destacar vendedores confiáveis e construir confiança na comunidade. |
| RF-013 | Fornecer atualizações de estoque | Notificar os clientes quando um item anteriormente esgotado estiver disponível novamente. Exibir informações de estoque em tempo real para evitar compras de produtos fora de estoque. |
| RF-014 | Acessar suporte ao cliente online | Implementar um sistema de chat ao vivo para oferecer suporte instantâneo durante o processo de compra. Disponibilizar uma seção de Perguntas Frequentes (FAQ) para responder às dúvidas mais comuns dos usuários. |
| RF-015 | Limitar visitantes | Visitantes no site não poderão negociar, avaliar ou receber notificações do site. |
| RF-016 | Implementar sistema de mensagens internas | Permitir que compradores e vendedores (concessionárias e autônomos) se comuniquem diretamente através de um sistema de mensagens internas, sem necessidade de expor informações pessoais, como e-mails ou números de telefone. As mensagens devem ser monitoradas para evitar práticas abusivas. |
| RF-017 | Agendamento de test drives | Implementar uma funcionalidade que permita aos clientes agendar test drives diretamente com as concessionárias ou vendedores autônomos. O sistema deve enviar lembretes automáticos via e-mail e permitir que o vendedor aceite ou sugira outro horário. |
| RF-018 | Histórico de visualizações de produtos | Fornecer para concessionárias e vendedores autônomos um sistema que notifique quando uma conta visualizar um de seus produtos, permitindo acompanhamento e análise de interesse. |
| RF-019 | Implementar opção de se tornar vendedor autônomo| na conta pessoal do usuário que é apenas cliente, terá o campo de se tornar vendedor. E na conta do vendedor terá como se tornar cliente. |
| RF-020 | Implementar um Sistema de Comparação de Produtos | Permitir que os usuários comparem diferentes veículos lado a lado. A funcionalidade deve permitir a seleção de até três veículos para comparação simultânea, exibindo informações detalhadas, como preço, especificações técnicas, ano, marca, estado de conservação (novo ou usado), entre outros. |


[ [INÍCIO](#Web-Cars) ]

## Requisitos Não Funcionais
A tabela a seguir contém a relação com os Requisitos Não Funcionais identificados, contendo identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
|:---|:---|:---|
|RNF-001 |Nome do Requisito |Descreva aqui as informações sobre o requisito |
|RNF-002 |Nome do Requisito |Descreva aqui as informações sobre o segundo requisito |


[ [INÍCIO](#Web-Cars) ]


# Prototipagem

[Protótipo criado no FIGMA em 2024 por estudantes](https://www.figma.com/file/iNC7wyX9zP7Kmn3BhiCFGf/Fals6Hood-(Prot%C3%B3tipo-criado-por-estudantes-em-2022)?node-id=0%3A1&t=B16hgeZP3MSURCCa-1)

![Imagem do Protótipo](/img/home.png)

[ [INÍCIO](#Web-Cars) ]


# Diagrama de Casos de Uso

![Diagrama de Casos de Uso](/img/use_case_placas.png)

[ [INÍCIO](#Web-Cars) ]

# Diagrama de Classes

![Diagrama de classes](/img/diagramafsatualizado.jpg)

[ [INÍCIO](#Web-Cars) ]

# REFERÊNCIAS

Esta subseção apresenta as referências aos documentos que utilizamos no auxílio à construção deste documento.
* [UML](https://www.omg.org/spec/UML/2.5/About-UML/)
* [Práticas para Especificação de Requisitos IEEE-830](https://ieeexplore.ieee.org/document/720574)
