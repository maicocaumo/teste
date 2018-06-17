
[![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![Dependency Status][depstat-dev-image]][depstat-dev-url] 

#Teste para candidatos à vaga de desenvolvedor Front-end

##Objetivo
Desenvolver uma aplicação que administre candidatos.

## Pre-requisitos
* Git
* NodeJS
* Bower
* MongoDB
* Sass
* Gulp
* Yoeman* *(Caso queira utilizar os recursos do Generator)*
 
##Instruções
* Faço um fork deste repositório.
* Desenvolva a aplicação utilizando as tecnologias: AngularJS, NodeJS, Express e MongoDB(**Mean**).
* Utilize a estrutura do repositório como base do desenvolvimento.
* Após terminar seu teste submeta um pull request e aguarde seu feedback.
 
 
##Especificações técnicas
1. A aplicação deve ser construída de forma **responsiva**, utilizando os **breakpoints** abaixo:

	Nome do breakpoint | Largura mínima | Largura mínima
	--- | --- | ---
	phone	| 320px	| Breakpoint para smartphones
	tablet | 768px	 | Breakpoint para tablets
	desktop	 | 1024px	|1024px
	monitor	| 1280px	 | Breakpoints para desktops grandes

2. Dê suporte a IE10+, Chrome, Safari e Firefox.
3. Utilizar os componentes do **Bootstrap/ Angular-Material** Design para montagem das telas.
4. A aplicação deve conter as seguintes telas:
	*	4.1 **Tela de cadastro de candidato**. 
		* 4.1.1 O formulário deve conter os campos de acordo com a tabela abaixo:
		
		 _| nome | cpf | telefone | endereco | sexo | idade | termoResponsabilidade
		--- | --- | --- | --- | --- | --- | --- | ---
		Type | Text | Number | Number | Text | Radio | Number | Checkbox
		Required | true | true | true | false | true | false | false

		* 4.1.2 Os campos de formulário devem possuir **validação** de **preenchimento** e **tipos de valores**.

		* 4.1.3 Os dados do preenchimento do formulário devem ser enviados para o serviço adequado.

		* 4.1.4 Os campos do formulário **não pode possuir** como **model** os valores da tabela **x.x.x**, logo deve-se realizar uma normalização dos dados antes de envia-los para o serviço.
	* 4.2 **Tela com as informações do candidato.**
		* 4.2.1 A tela deve possuir um botão de atualizar os dados, utilizando o protocolo **PUT**.
	* 4.3 **Tela com a listagem dos candidatos cadastrado**.
		* 4.3.1 A listagem dos candidatos deve listar apenas os candidatos que possuírem o registro **termoResponsabilidade** selecionado como **TRUE**.
		* 4.3.2 O candidato listado deve ser um link para acessar a página(view/route) com as informações daquele candidato.
* O serviço/back-end deve possuir uma rota para realizar as operações dos candidatos. 
* O serviço/back-end(NodeJS) deve expor uma API no modelo RESTful para ser utilizado no AngularJS e e possuir os métodos de **get**, **post**, **put** e **delete**.
* O banco de dados(MongoDB) deve possuir uma **Colleciton**(Tabela) de acordo com o modelo abaixo:
		
		 _| nome | cpf | telefone | endereco | sexo | idade | termoResponsabilidade
		--- | --- | --- | --- | --- | --- | --- | ---
		Type | String | Number | Number | String | String | Number | Boolean
		Required | true | true | true | false | true | false | false
		
* Os erros do serviço/back-end(NodeJS) devem ser tratados e enviados no modelo de **Status HTTP** para o AngularJS.
* O serviço/back-end(NodeJS) deve realizar uma **validação** no cadastro de candidato, para **permitir apenas um cadastro** por **CPF**.

##Pontos extras
- Seguir as boas práticas de desenvolvimento em AngularJS 1.x e NodeJS.
- Desenvolver HTML semântico.
- Utilizar **UI Router** com **state** para gerenciar as **Rotas** a aplicação.
- Não utilizar Jquery ou outras bibliotecas sem necessidade.
- Componentizar elementos reutilizáveis através de diretivas e filtros.
- Utilizar testes automatizados. Framework livre a sua escolha.
- Implementar autenticação com JWT.
- Gerar a documentação da aplicação desenvolvida.


[travis-url]: https://travis-ci.org/acnrecife/Front-End-Test-Interview
[travis-image]: https://travis-ci.org/acnrecife/Front-End-Test-Interview.svg?branch=master

[depstat-url]: https://david-dm.org/acnrecife/Front-End-Test-Interview
[depstat-image]: https://david-dm.org/acnrecife/Front-End-Test-Interview.svg
[depstat-dev-url]: https://david-dm.org/acnrecife/Front-End-Test-Interview#info=devDependencies
[depstat-dev-image]: https://david-dm.org/acnrecife/Front-End-Test-Interview/dev-status.png

