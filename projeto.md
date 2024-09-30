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
| RF-001 | Criar conta comum | Para criar uma conta, o cliente precisará fornecer nome completo, CPF, número de telefone, e-mail, e criar e definir uma senha. |  
| RF-002 | Criar conta concessionária | Para criar uma conta, a concessionária precisará fornecer o nome da empresa, CNPJ, número de telefone, e-mail, localização, e criar e definir uma senha. |  
| RF-003 | Fazer login da conta | Para efetuar login da conta o usuário independente da conta, terá de apresentar o e-mail da conta e a senha dela. |  
| RF-004 | Fazer logout da conta | Para qualquer conta poder efetuar o logout terá na janela de personalização de conta, um botão que ao usuário apertar o botão será efetuado o logout do usuário do site e voltar para a tela inicial. |  
| RF-005 | Excluir conta | Para o usuário excluir sua conta, ele terá de acessar a janela de personalização de conta e no último campo da janela irá conter um botão de excluir conta, em que ao clicar nele será aberto um pop-up em que será questionado para o usuário se ele realmente deseja realizar essa ação e no caso de ele realmente querer efetuar a exclusão da conta, será exigido a senha do usuário para finalizar o processo de exclusão. |  
| RF-006 | Apresentar produtos mais populares ao entrar | Assim que o usuário entrar no site, ele verá os produtos mais populares daquele momento. Será exibida a imagem do produto, com o nome, marca e ano. Abaixo, deverá ser mostrado o preço em verde. Caso o produto esteja em desconto, o valor anterior deve estar acima, com tamanho inferior e riscado, com a porcentagem de desconto ao lado. |  
| RF-007 | Apresentar informações mais detalhadas do produto | Quando o usuário clicar no anúncio do produto, ele será levado à página do produto, onde serão apresentados os dados do produto, como modelo, marca, ano, entre outros. Também deverá ser especificado se o produto é novo ou usado. |  
| RF-008 | Pesquisar produtos | Deverá haver uma barra de pesquisa na parte superior central, onde o usuário poderá digitar o nome, ano ou marca do produto desejado. Também deverão ser incluídos filtros para facilitar a busca, como faixa de preço, faixa de ano, e a opção de especificar se deseja comprar um produto novo ou usado. |  
| RF-009 | Adicionar produtos ao repositório | As concessionárias ou vendedores autônomos devem ter a capacidade de adicionar seus produtos ao repositório. Para cada produto, devem ser fornecidas as seguintes informações obrigatórias: descrição detalhada do produto, dados técnicos e especificações relevantes. Devem ser incluídas pelo menos quatro fotos de alta qualidade, capturando o produto de diferentes ângulos, para que os clientes possam visualizar todos os detalhes importantes. |  
| RF-010 | Alterar dados de um produto já postado | Para o vendedor alterar um possível erro ou dado errado do produto postado. Será possível ele fazer alterações nos produtos postados indo em sua conta e lá terá a opção de meus produtos onde terá todos os produtos postados em ondem de mais recente a mais antigo, lá o vendedor poderá abrir a tela de edição e corrigir os dados do veículo. | 
| RF-011 | Excluir produto | Para o usuário excluir seus produtos, ele terá de ir à tela da sua conta onde terá a opção de meus produtos e neles terá a opção de “deletar este produto” que condo clicado será aberto um alerta questionando o usuário se ele realmente deseja realizar aquela ação e caso confirmado. O produto será excluído. | 
| RF-012 | Integrar o sistema com GPS | Fornecer um a localização das concessionárias que estão vendendo o veículo e fornecer rotas diretas para visitação dos clientes. Vendedores autônomos terão a opção de escolher se desejam ou não fornecer sua localização, sendo avisados dos riscos. |  
| RF-013 | Adicionar item à lista de desejo | Possibilitar que os usuários criem listas de desejos, salvando itens para compras futuras. |  
| RF-014 | Excluir item da lista de desejo | Possibilitar que os usuários retirem os itens adicionado na lista de desejo. Para realizar isso o usuário enteará em sua lista de desejo e ao passar o mouse por cima haverá “...” no canto superior direito do card do produto e ao clicar nesses 3 pontos irá aparecer a opção ver mais detalhe do produto e excluir da lista de desejo. | 
| RF-015 | Personalizar o perfil da conta comum | Permitir que os usuários personalizem seus perfis com informações adicionais, como preferências de veículos, marcas favoritas, entre outros. Utilizar essas informações para aprimorar recomendações e proporcionar uma experiência personalizada. |  
| RF-016 | Personalizar o perfil da conta concessionaria | Permitir que a concessionária consiga fazer alterações em seus dados, incluindo a localização, nome, imagem e etc.. |  
| RF-017 | Fornecer tela de suporte | No caso de o usuário ter dificuldades para efetuar alguma função terá uma tela de ajuda com opções de possíveis questionamentos que ao clicar aparecerá mensagens pronta explicando como efetuar o processo, caso o perchista a dificuldade do usuário ele terá a opção de acessar o suporte via WhatsApp. | 
| RF-018 | Fornecer atualizações de estoque | Notificar os clientes quando um item anteriormente esgotado estiver disponível novamente. Exibir informações de estoque em tempo real para evitar compras de produtos fora de estoque. |  
| RF-019 | Limitar visitantes | Visitantes no site não poderão negociar, avaliar ou receber notificações do site. |  
| RF-020 | Implementar opção de se tornar vendedor autônomo| na conta de um usuário comum ele terá a opção de vender carros, pensando em aqueles que querem apenas vender o seu carro, ele terá de preencher todos os campos. Porém não irá aparecer a localização dele por motivos de segurança. | 
| RF-021 | Implementar um “avise me” | O usuário poderá criar uma espécie de filtro em que o usuário poderá colocar as especificações do veículo que ele deseja e criar um “vigia” que irá avisar o usuário quando o veículo com essas especificações ser postado por algum vendedor. |


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

![Diagrama de classes](/img/diagramafs.png)

[ [INÍCIO](#Web-Cars) ]

# REFERÊNCIAS

Esta subseção apresenta as referências aos documentos que utilizamos no auxílio à construção deste documento.
* [UML](https://www.omg.org/spec/UML/2.5/About-UML/)
* [Práticas para Especificação de Requisitos IEEE-830](https://ieeexplore.ieee.org/document/720574)
