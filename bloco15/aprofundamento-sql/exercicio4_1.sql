ALTER TABLE projetos
ADD description VARCHAR(255);

SELECT * FROM projetos;

UPDATE projetos
SET description = "Projeto de sistema em nuvem da Labenu."
WHERE id = 1;

UPDATE projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 2;

UPDATE projetos
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = 3;

SELECT * FROM projetos;