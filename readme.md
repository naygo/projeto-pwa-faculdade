# Projeto 1 - Aplicação web progressiva

**Nome da aplicação:** My Books

**Criadora:** Nayla Cristina Gomes Carvalho da Silva

Esta aplicação tem como objetivo cadastrar e listar os livros que uma pessoa está lendo para ajudar a controlar sua leitura e guardar os livros que já. Além de cadastrar e listar, ela também permite a edição das informções de um livro já cadastrado, exclusão do mesmo. Também há a possibilidade de marcar livros como lidos através de um checkbox e também filtrá-los por título.

### Tela 1

A primeira tela apresentada exibe a listagem dos livros. No primeiro acesso não haverá nada, uma mensagem irá informar que não há livros adicionados. Você pode adicionar um novo livro clicando no botão de + no canto direito superior.

![Tela 1](/images/tela1.png)

Quando houver livros para serem listados eles apareceram da seguinte forma:

![Tela 1](/images/tela1-listagem.png)

Abaixo do título, na faixa verde, são apresentadas as seguintes informações preenchidos na tela de adição de livros (tela 2):

- Checkbox: o checkbox informa se o livro foi lido ou não. Marcado significa que foi lido, desmarcado significa que não.
  ![Tela 1 - Livro lido](/images/tela1-livrolido.png)
- Author: nome do autor do livro.
- Pages: número de páginas.

Além desses dados apresentados ao usuário, cada livro possui um ID para identificação e realização correta das ações.

Nesta tela também é possível filtrar os livros por título através da caixa de texto na parte de cima. Basta escrever o título que deseja pesquisar, se nada for encontrado uma mensagem será apresentada.

![Tela 1 - Pesquisando](/images/tela1-search1.png)
![Tela 1 - Pesquisado](/images/tela1-search2.png)

A tela 3, que é a tela de edição, também é acessada por esta tela. Ao passar o mouse sobre os títulos dos livros o fundo fica verde e ao clicar o usuário é redirecionado à tela de edição do respectivo livro.

![Tela 1 - Acessando tela 3](/images/tela3-acesso.png)

### Tela 2

A tela dois apresenta um formulário para a adição de um novo livro. Este formulário conta com 3 campos e dois botões. Para a operação ser realizada todos os campos devem ser preenchidos, caso contrário o botão "Add", que confirma o cadastro, não executará sua ação. O botão "Cancel", é reponsável por cancelar toda a ação e retornar para a tela 1.

![Tela 2](/images/tela2.png)

### Tela 3

A tela 3 é a tela de edição, aqui é exibido um formulário já preenchido com os dados do livro que está editando e três botões. O usuario pode alterar as informações e ao clicar no botão "Confirm" as alterações serão salvas. O botão "Cancel" cancela a ação e o botão "Delete Book" exclui o livro da lista. Ao final de qualquer ação o usuário é retornado à tela 1.

![Tela 3](/images/tela3-edit.png)

#### Perguntas

A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?
**Sim**

A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?
**Sim**

A aplicação armazena e usa de forma relevante dados complexos (mais de um atributo)?
**Sim**

A aplicação possui um manifesto para instalação no dispositivo do usuário?
**Sim**

A aplicação possui um service worker que permite o funcionamento off-line?
**Sim**

O código da minha aplicação possui comentários explicando cada operação?
**Sim**

A aplicação está funcionando corretamente?
**Sim**

A aplicação está completa?
**Sim**
