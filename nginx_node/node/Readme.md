## Node vs MSYQL

# Criar a tabela people no container mysql
* use nodedb;
* create table people(id int not null auto_increment, name varchar(255), primary key (id));

* O container que estiver rodando o node tem que ter o modulo do mysql instalado
* 