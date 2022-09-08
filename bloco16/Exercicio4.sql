INSERT INTO Funcionarios(Id, Nome, Email)
VALUE(
"004",
"Yuzo",
"yuzo@lbn.com"
);

SELECT * FROM Funcionarios;

DELETE FROM Funcionarios
WHERE Id = "004";

SELECT * FROM Funcionarios;