<img src='/img/logo.png' alt='logo da empresa' width='50px' heidth='50px'/>

# *FIBONACCI MANAGEMENT SYSTEM*

# PROJETO DE SOFTWARE

## *Stakeholders*
|NOME|CARGO|E-MAIL|
|:---|:---|:---|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|
|Wagner da Silva Ferreira Filho|Gerente de Projeto|wagner.ferreira@ifro.edu.br|


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
| NOME DO PROJETO | Fibonacci Management System |
| GERENTE DO PROJETO | Wagner Ferreira |
| PRINCIPAL OBJETIVO | Auxiliar o sistema de ensino através de ferramentas síncronas e assíncronas que serão usadas por funcionários e alunos da instituição de ensino. |
| BENEFÍCIOS ESPERADOS |* Melhor acompanhamento pedagógico;<br/>* Redução da evasão escolar;<br/>* Aumento do número de matrículas;<br/>* Redução da inadimplência escolar;<br/>* Automatização dos processos financeiross|
| INÍCIO E TÉRMINO PREVISTOS | 14/03/2023 - 07/12/2023 |

[ [INÍCIO](#fibonacci-management-system) ]

# INTRODUÇÃO

## PROPÓSITO DESTE DOCUMENTO

Este documento destina-se aos clientes, engenheiros, gerentes e demais stakeholders deste projeto. O propósito deste documento é apresentar a descrição dos serviços e funções que o sistema **_Fibonacci Management System_** deve prover, bem como as suas restrições de operação e propriedades gerais, a fim de ilustrar uma descrição detalhada do sistema para um auxílio durante as etapas de análise, projeto e testes. O documento especifica todos os requisitos funcionais e não funcionais do sistema e contém a prototipagem, além de diagramas UML que foram construídos levando-se em conta as funcionalidades identificadas durante a fase de concepção do sistema.

[ [INÍCIO](#fibonacci-management-system) ]

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


[ [INÍCIO](#fibonacci-management-system) ]

# Metodologia Adotada no Desenvolvimento


[ [INÍCIO](#fibonacci-management-system) ]

# Requisitos do Software

A especificação dos requisitos deste documento deve seguir as recomendações da norma IEEE Std-830-1998, levando em conta as recomentações do documento de [características dos requisitos](caracteristicas_requisitos.md).

## Requisitos Funcionais

A tabela a seguir contém a relação dos Requisitos Funcionais elicitados, com as colunas: identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
:---|:---|:---|
|RF-001 | Criar, trocar, fazer login, excluir conta | Para criar contar conta será necessário: nome completo, CPF, número de telefone, Email, criar e definir senha, ao fazer isso irá aparecer uma mensagem perguntando se deseja salvar a senha, se o usuário apertar e “Sim” a conta sempre será usada ao abrir o site. Para fazer login da conta será: Necessário CPF ou Email, e senha. Para excluir conta será necessário CPF ou Email, senha e confirmação pelo Email que questionara se o usuário realmente deseja isso, caso seja confirmado, a conta será excluída. Para trocar conta terá um botão no canto inferior direito em que ao clicar nele será aberto um aviso perguntando se é realmente desejado a troca da conta e ao apertar em “Sim” será feito o logoff da conta e será aberto a janela de adicionar conta. |  
|RF-002 | Apresentar produtos mais populares ao entrar | Assim que o usuário entrar no site ele verá os produtos mais populares daquele momento, e deverá mostrar a imagem do produto, com o nome, marca e ano, abaixo contendo o preço com a cor verde e caso esteja em desconto, o valor anterior deve estar acima com tamanho inferior e riscado, com a porcentagem de desconto ao lado. | 
|RF-003 | Apresentar informações mais detalhadas do produto | Quando o usuário apertar em cima do anúncio do produto ele será levado a página do produto em que serão apresentados os dados dele que serão: Modelo, marca, ano etc. Também deverá ser especificado se o produto é novo ou usado. | 
|RF-004 | Pesquisar produtos | Deverá ter uma barra de pesquisa no meio superior, onde o usuário poderá digitar o nome, ano ou marca do produto que deseja. Também deverá ter filtros para que faça a busca de maneira mais eficiente, nesses filtros deveram constituir faixa de preço, faixa de ano e a opção de especificar se deseja comprar um produto novo ou usado | 
|RF-005 | Selecionar produto para compra | quando o usuário desejar realizar uma compra ele será levado a uma página que irá apresentar as formas de pagamento: pix, boleto, cartão de débito ou crédito. Caso ele escolha pix, será criada uma chave e um QR-code para o pagamento, para boleto e cartão de crédito irá perguntar se o usuário deseja parcelar ou pagar à vista e na escolha do cartão de débito será feita a vista. E no0 final aparecerá um aviso perguntando se deseja prosseguir com a compra e ao clicar no “Sim” a compra será efetuada. | 
|RF-006 | Cadastrar cartão de crédito | O usuário poderá cadastrar seu cartão de crédito na sua conta para poder efetuar comprar futuras, para cadastrar ele deverá adicionar os dados do cartão, como número do cartão, nome completo, a data de expiração do cartão, agência etc. Ao realizar essa etapa bastará o usuário marcar com finalizado e o cartão será adicionado a seus meios de pagamento. | 
|RF-007 | Cancelamento de compra | No caso do usuário se arrepender da compra dentro do período de 24 horas, ele pode solicitar para cancelamento das compras, no caso de a compra ter sido a vista, o valor retornara imediatamente, no caso de ter sido feita em boleto ou em crédito o valor não será cobrado, ao requerer o pagamento, será feito um questionário em que o usuário poderá responde o u deixar em branco, após isso será perguntado se deseja mesmo cancelar a compra e ao confirmar a compra será cancelada. | 
|RF-008 | Confirmar a finalização da comprar | A fazer todos os processos e não cancelar a comprar, o usuário será notificado em seu Email apresentando todos os dados da compra e aparecerá o número de contato da concessionária. | 
|RF-009 | Apresentar acessórios. | Deverá aparecer acessórios para o usuário, baseados nas pesquisas relacionadas a veículos, assim mostrando acessórios compatíveis e populares para aqueles ou aquele veículo. | 
|RF-010 | Armazenar histórico de Compras | Ao acessar a conta, o usuário terá disponível um histórico completo de suas compras anteriores, contendo informações como datas, itens adquiridos e valores. Será possível reordenar itens diretamente a partir do histórico de compras para facilitar a recompra de produtos. | 
|RF-011 | Compartilhar em Redes Sociais | Integre a funcionalidade de compartilhamento, permitindo que os usuários compartilhem produtos ou compras em suas redes sociais. Inclua tags personalizadas ou links para rastrear a origem do tráfego gerado por compartilhamentos. | 
|RF-012 | Rastrear de Pedidos | Fornecer informações de rastreamento em tempo real para que os usuários possam acompanhar o status de entrega de seus pedidos. Enviar notificações automáticas sobre atualizações importantes no status do pedido, mantendo os usuários informados. | 
|RF-013 | Acessar suporte ao Cliente Online | Implementar um sistema de chat ao vivo para oferecer suporte instantâneo durante o processo de compra. Disponibilizar uma seção de Perguntas Frequentes (FAQ) para responder às dúvidas mais comuns dos usuários. | 
|RF-014 | Fornecer recomendações Personalizadas | Permitir que os usuários personalizem suas preferências de recomendação para uma experiência mais individualizada. | 
|RF-015 | Criar listas de desejos | Possibilitar que os usuários criem listas de desejos, salvando itens para compras futuras. Incluir a opção de compartilhar listas de desejos, facilitando a interação e recomendações entre usuários. | 
|RF-016 | Fornecer atualizações de Estoque | Notifique os usuários quando um item anteriormente esgotado estiver disponível novamente. Exiba informações de estoque em tempo real para evitar compras de produtos fora de estoque. | 
|RF-017 | Fornecer programa de Fidelidade | Implementar um programa de recompensas ou pontos de fidelidade para incentivar a repetição de compras. Oferecer benefícios exclusivos, como descontos ou brindes, para membros do programa de fidelidade. | 
|RF-018 | Possibilitar Avaliações e Comentários | Permitir que os usuários deixem avaliações e comentários nos produtos, enriquecendo a experiência de compra. Apresentar uma média de avaliações na página do produto para orientar as decisões de compra. | 
|RF-019 | Possibilitar avaliações dos vendedores | Disponibilizar um sistema de avaliação para os vendedores, permitindo que compradores expressem suas experiências. Utilize essas avaliações para destacar vendedores confiáveis e construir confiança na comunidade. | 
|RF-020 | Personalizar o Perfil | Permitir que os usuários personalizem seus perfis com informações adicionais, como preferências de veículos, marcas favoritas etc. Utilizar essas informações para aprimorar recomendações e proporcionar uma experiência personalizada. | 
|RF-021 | Disponibilizar Cupons e Promoções | Integrar um sistema de cupons e promoções, permitindo que os usuários apliquem descontos durante o checkout. E exibir ofertas especiais na página inicial para atrair a atenção dos usuários. | 

## Requisitos Não Funcionais
A tabela a seguir contém a relação com os Requisitos Não Funcionais identificados, contendo identificador, nome, descrição e prioridade:

| IDENTIFICADOR | NOME | DESCRIÇÃO |
|:---|:---|:---|
|RNF-001 |Nome do Requisito |Descreva aqui as informações sobre o requisito |
|RNF-002 |Nome do Requisito |Descreva aqui as informações sobre o segundo requisito |


[ [INÍCIO](#fibonacci-management-system) ]


# Prototipagem

[Protótipo criado no FIGMA em 2022 por estudantes](https://www.figma.com/file/iNC7wyX9zP7Kmn3BhiCFGf/Fals6Hood-(Prot%C3%B3tipo-criado-por-estudantes-em-2022)?node-id=0%3A1&t=B16hgeZP3MSURCCa-1)

![Imagem do Protótipo](/img/home.png)

[ [INÍCIO](#fibonacci-management-system) ]


# Diagrama de Casos de Uso

![Diagrama de Casos de Uso](/img/use_case_placas.png)

[ [INÍCIO](#fibonacci-management-system) ]

# Diagrama de Classes

![Diagrama de classes](/img/diagramafs.jpg)

[ [INÍCIO](#fibonacci-management-system) ]

# REFERÊNCIAS

Esta subseção apresenta as referências aos documentos que utilizamos no auxílio à construção deste documento.
* [UML](https://www.omg.org/spec/UML/2.5/About-UML/)
* [Práticas para Especificação de Requisitos IEEE-830](https://ieeexplore.ieee.org/document/720574)
