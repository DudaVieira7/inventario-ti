CREATE DATABASE sistema_gerenciamento_ti;
USE sistema_gerenciamento_ti;

CREATE TABLE equipamentos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantidade INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    status ENUM('disponivel','em_uso','em_manutencao') NOT NULL DEFAULT 'disponivel',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);