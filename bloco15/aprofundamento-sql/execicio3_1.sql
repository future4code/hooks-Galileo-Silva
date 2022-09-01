ALTER TABLE projetos
DROP COLUMN title;

SELECT * FROM projetos;


ALTER TABLE projetos
CHANGE date dueDate DATE;

SELECT * FROM projetos;

ALTER TABLE Funcionarios
MODIFY Email VARCHAR(40) PRIMARY KEY;

SELECT * FROM Funcionarios;


