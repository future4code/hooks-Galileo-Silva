SELECT * FROM Funcionarios;

SELECT Id AS identifier FROM Funcionarios;

SELECT Id FROM Funcionarios WHERE Nome="Laura";

SELECT Id, Nome FROM Funcionarios WHERE Nome LIKE "%a%";

SELECT Id, Nome, Email FROM Funcionarios WHERE Nome NOT LIKE  "%r%" AND Email LIKE "%u%";