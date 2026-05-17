CREATE DATABASE IF NOT EXISTS cv_db;
USE cv_db;

CREATE TABLE persona (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    foto VARCHAR(255) NOT NULL
);

CREATE TABLE formacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    institucion VARCHAR(200) NOT NULL,
    anio VARCHAR(10) NOT NULL,
    persona_id INT NOT NULL,
    FOREIGN KEY (persona_id) REFERENCES persona(id)
);

INSERT INTO persona (nombre, apellido, ciudad, foto) VALUES
('Alejandro', 'Iglesias Raldes', 'La Paz', 'https://ui-avatars.com/api/?name=Alejandro+Iglesias&size=200&background=0D8ABC&color=fff');

INSERT INTO formacion (titulo, institucion, anio, persona_id) VALUES
('Ingeniero de Sistemas', 'Universidad Autonoma Tomas Frias (UATF)', '2020', 1),
('Especialista en Redes', 'Cisco Networking Academy', '2022', 1);
