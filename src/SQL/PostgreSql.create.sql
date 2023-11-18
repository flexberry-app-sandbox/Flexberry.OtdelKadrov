﻿




CREATE TABLE График (
 primaryKey UUID NOT NULL,
 IDсотрдника VARCHAR(255) NULL,
 Начальник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Прием (
 primaryKey UUID NOT NULL,
 IDсотрдника VARCHAR(255) NULL,
 IDдолжности VARCHAR(255) NULL,
 IDподразделения VARCHAR(255) NULL,
 Подразделения UUID NOT NULL,
 Начальник UUID NOT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Увольнение (
 primaryKey UUID NOT NULL,
 IDсотрдника VARCHAR(255) NULL,
 IDподразделения VARCHAR(255) NULL,
 Подразделения UUID NOT NULL,
 Должности UUID NOT NULL,
 Начальник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Подразделения (
 primaryKey UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Расчет (
 primaryKey UUID NOT NULL,
 IDсотрдника VARCHAR(255) NULL,
 Начальник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 IDдолжности VARCHAR(255) NULL,
 IDПодразделения VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 Подразделения UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Начальник (
 primaryKey UUID NOT NULL,
 IDсотрдника VARCHAR(255) NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE График ADD CONSTRAINT FK53ccdd6a6895286e4116bb92ff7bbaff75ba7ad7 FOREIGN KEY (Начальник) REFERENCES Начальник; 
CREATE INDEX Index53ccdd6a6895286e4116bb92ff7bbaff75ba7ad7 on График (Начальник); 

 ALTER TABLE Прием ADD CONSTRAINT FKd553d71c8cba201d42db9af5265fb5d2409a2d46 FOREIGN KEY (Подразделения) REFERENCES Подразделения; 
CREATE INDEX Indexd553d71c8cba201d42db9af5265fb5d2409a2d46 on Прием (Подразделения); 

 ALTER TABLE Прием ADD CONSTRAINT FK6c8e0a0177b8f493ddde887fc112158877ae7112 FOREIGN KEY (Начальник) REFERENCES Начальник; 
CREATE INDEX Index6c8e0a0177b8f493ddde887fc112158877ae7112 on Прием (Начальник); 

 ALTER TABLE Прием ADD CONSTRAINT FK5fc352a4a1fe63d33c291ba92f6340977fcb3104 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Index5fc352a4a1fe63d33c291ba92f6340977fcb3104 on Прием (Должности); 

 ALTER TABLE Увольнение ADD CONSTRAINT FK8369c229dd096980f574f232e10aa3d73667e3fd FOREIGN KEY (Подразделения) REFERENCES Подразделения; 
CREATE INDEX Index8369c229dd096980f574f232e10aa3d73667e3fd on Увольнение (Подразделения); 

 ALTER TABLE Увольнение ADD CONSTRAINT FK796edd34db96d2923f771a98f5345d16e47983f6 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Index796edd34db96d2923f771a98f5345d16e47983f6 on Увольнение (Должности); 

 ALTER TABLE Увольнение ADD CONSTRAINT FKb2d0254647466613018a8e149d8d0d31e46dbd30 FOREIGN KEY (Начальник) REFERENCES Начальник; 
CREATE INDEX Indexb2d0254647466613018a8e149d8d0d31e46dbd30 on Увольнение (Начальник); 

 ALTER TABLE Расчет ADD CONSTRAINT FKfb79c2b6af1d977f47e9f70b28af40a04d799e8e FOREIGN KEY (Начальник) REFERENCES Начальник; 
CREATE INDEX Indexfb79c2b6af1d977f47e9f70b28af40a04d799e8e on Расчет (Начальник); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FKcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 on Сотрудник (Должности); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FKa39d6827bb80a15a17f912f63066fa3be1c76d45 FOREIGN KEY (Подразделения) REFERENCES Подразделения; 
CREATE INDEX Indexa39d6827bb80a15a17f912f63066fa3be1c76d45 on Сотрудник (Подразделения); 

 ALTER TABLE Начальник ADD CONSTRAINT FK90fe1d03ad01c4526e34cb427186296ee9cbff9b FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index90fe1d03ad01c4526e34cb427186296ee9cbff9b on Начальник (Сотрудник); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

