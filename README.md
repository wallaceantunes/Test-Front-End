
# Teste para Desenvolvedor Front-End


## Introdução

Este é um teste aplicado na seleção de novos desenvolvedores Front-End da Ubiqui.

O teste consiste na utilização de um template de mercado para a produção de um painel de listagem de clientes, bem como para realizar cadastro, edição e exclusão.

Este deve ainda ser personalizado de acordo com o padrão visual especificado.


## Objetivos



*   Conhecer um pouco de suas habilidades e sua maneira de trabalho.
*   Saber como trabalha com versionamento de código.
*   Você deve utilizar os seguintes stacks:
    *   HTML
    *   CSS
    *   JS ou JQuery

Se desejar mostrar ainda mais suas habilidades, fique à vontade para utilizar algum framework, como Vue.Js, React ou Angular. Mas saiba que na Ubiqui, podemos utilizar HTML e CSS puro em algum de nossos projetos.


## Requisitos

Baixe o template AdminLte ([https://adminlte.io/](https://adminlte.io/)) e utlize seus recursos visuais como base para o seu desenvolvimento. Você não deverá criar um o layout do zero.

Será preciso personalizá-lo de acordo com o padrão visual da Ubiqui. 



*   Neste link você encontra nosso logo: http://ubiqui.com.br/logos/logo_ubiqui_white.svg
*   A cor principal é: #203f98
*   E a cor secundária é: #00a79d
*   Fique a vontade se precisar criar variações dessas cores (tons mais claros ou tons mais escuros)

Não altere os arquivos do pacote deste template (css e js). Crie um documento **ubiqui.css** e implemente-o à sua aplicação. Nele, devem ser inseridas as modificações visuais realizadas, bem como as classes criadas por você, nesta tarefa.

Você ainda precisará estruturar o template, particionando-o em bloco comuns que poderão ser utilizados em uma nova renderização. Dessa forma, separe o template em pequenas partes comuns (header, footer, side-nav, etc.).

Agora… mão na massa! Nesse desafio, você deve criar um painel de clientes, o qual apresentará a listagem de clientes da aplicação, bem como a possibilidade de adição, edição e exclusão.


## Recursos


### Listagem de clientes

Ao clicar no menu **Clientes**, devemos visualizar a listagem de clientes cadastrados na aplicação.

A lista deve conter os seguintes dados: 



*   Nome
*   Documento 
*   Email
*   Cliente desde (deve ser considerada a data de criação do cadastro do cliente)
*   Editar
*   Excluir

**Atenção**: A opção de editar e excluir deve ser por cliente.


### Adição de cliente

No painel **Clientes**, deve haver um botão **Novo cliente**. Este pode ser posicionado antes do início da listagem dos clientes.

Ao clicá-lo, deve ser exibido um formulário com os seguintes dados e regras.



*   Tipo - obrigatório (tipo select)
    *   Opção PF: Pessoa Física (enviar como PF) 
    *   Opção PJ: Pessoa Jurídica (enviar como PJ)
*   Documento - obrigatório (tipo input)
    *   Label como CPF - quando o campo 'Tipo' for selecionado como 'Pessoa Física') 
    *   Label como CNPJ (quando o campo 'Tipo' for selecionado como 'Pessoa Jurídica')
    *   Deve ser utilizada uma máscara para cada um dos documentos, de acordo com o tipo selecionado.
    *   Não será permitida a duplicidade de cadastro com este dado, a qual deve ser informado ao usuário seja por meio de um toastr ou um modal, caso haja a tentativa de cadastro.
*   Nome - obrigatório (tipo input)
    *   Label como 'Nome' quando o campo 'Tipo' for selecionado como 'Pessoa Física' 
    *   Label como 'Razão social' (quando o campo 'Tipo' for selecionado como 'Pessoa Jurídica').
*   Nome fantasia - não obrigatório (tipo input)
    *   Este dado é solicitado apenas se o campo 'Tipo' for selecionado como 'Pessoa Jurídica'. 
    *   Apenas neste caso será um dado obrigatório.
*   Nascimento/Abertura - obrigatório (tipo input) 
    *   Label como 'Nascimento' quando o campo 'Tipo' for selecionado como 'Pessoa Física'.
    *   Label como 'Abertura da empresa' quando o campo 'Tipo' for selecionado como 'Pessoa Jurídica'.
    *   Este campo é de preenchimento obrigatório apenas para cadastros do tipo 'Pessoa Física'; 
*   Gênero - obrigatório (tipo select) 
    *   Opção F: Feminino (enviar como F)
    *   Opção M: Masculino (enviar como M)
    *   Este campo deve ser solicitado apenas quando o campo 'Tipo' for selecionado como 'Pessoa Física'. 
*   Telefone - obrigatório (tipo input): 
    *   Devem ser aceitos telefones fixos ou celulares. 
    *   Utilizar máscara inteligente que os identifique.
*   E-mail - obrigatório (tipo input)
    *   Campo texto comum
    *   Não será permitida a duplicidade de cadastro com este dado, a qual deve ser informado ao usuário seja por meio de um toastr ou um modal, caso haja a tentativa de cadastro.
*   CEP - obrigatório (tipo input)
    *   Utilizar máscara para formatar este dado. 
    *   Deve ser consumida a API do Viacep para preencher automaticamente os campos 'endereço', 'bairro', 'cidade', e 'uf'.
*   Endereço - obrigatório (tipo input)
    *   Dado preenchido a partir do Cep informado.
*   Número - obrigatório (tipo input) 
    *   Permitir letras e números neste campo.
*   Complemento - não obrigatório (tipo input)
    *   Permitir letras e números neste campo.
*   Bairro - obrigatório (tipo input)
    *   Dado preenchido a partir do Cep informado.
*   Cidade - obrigatório (tipo input)
    *   Dado preenchido a partir do Cep informado.
*   Uf - obrigatório (tipo input)
    *   Dado preenchido a partir do Cep informado.
*   Botão gravar
    *   Deve ser verificado o retorno da API para apresentar ao cliente possíveis erros.
    *   Não deve ser possível o envio de cadastro caso os dados obrigatórios não sejam preenchidos (a API também irá validar).
    *   Caso um campo obrigatório não seja preenchido, indicá-lo ao usuário.
    *   Caso um campo tenha sido preenchido, porém não nos padrões esperados, apresentar ao usuário o problema informado. Por exemplo, se for utilizado um CPF inválido, indicar no campo ao usuário.


### Editar cliente

Deve ser utilizado o mesmo formulário da adição, seguindo todas as regras apresentadas no recurso 'Adicionar cliente'. 

Aqui, devem ser carregadas todas as informações do respectivo cliente.

Além disso, deve ser bloqueada a edição dos seguintes campos:



*   Tipo
*   Documento
*   Email


### Excluir cliente

Ao clicar no recurso excluir cliente, deve ser apresentado um modal de confirmação para a ação.

No modal, utilize a mensagem: 

_Deseja realmente excluir este cliente? \
Esta ação não poderá ser desfeita._

No modal, deve haver a opção 'Cancelar' que deve fechar o modal, bem como a opção 'Confirmar' o qual realizará a ação de exclusão.


### Api

Todas as ações apresentadas aqui já possuem uma documentação API que poderá ser utilizada. Para visualizar a documentação, acesse: https://health.ubiqui.com.br


## Diferenciais



*   Criatividade
*   Aplicação responsiva


## O que avaliamos



*   Qualidade de código
*   Código limpo
*   Simplicidade
*   Organização e padrão de Commits
*   Otimização do código implementado
*   Adaptação à layouts e recursos pré-existentes
*   Capacidade de compreensão das documentações e orientações


## Observações



*   Não tenha medo de utilizar comentários, se achar necessário comentar alguma parte ou explicar algo, faça!!
*   Nunca realizamos Commit no master!!


## Considerações



*   Você terá liberdade na escolha da apresentação das informações. Lembre-se apenas de seguir o padrão visual informado.
*   Nos conte o que achou do teste.


## Entrega

Você deve criar um fork do repositório no seu GitHub e subir seu código lá, assim que finalizar o projeto, envie o link para o seu avaliador.

Boa sorte! =D
