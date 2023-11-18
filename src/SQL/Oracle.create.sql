



CREATE TABLE "График"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDсотрдника" NVARCHAR2(255) NULL,

	"Начальник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Прием"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDсотрдника" NVARCHAR2(255) NULL,

	"IDдолжности" NVARCHAR2(255) NULL,

	"IDподразделения" NVARCHAR2(255) NULL,

	"Подразделения" RAW(16) NOT NULL,

	"Начальник" RAW(16) NOT NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Увольнение"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDсотрдника" NVARCHAR2(255) NULL,

	"IDподразделения" NVARCHAR2(255) NULL,

	"Подразделения" RAW(16) NOT NULL,

	"Должности" RAW(16) NOT NULL,

	"Начальник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Подразделения"
(

	"primaryKey" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Расчет"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDсотрдника" NVARCHAR2(255) NULL,

	"Начальник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDдолжности" NVARCHAR2(255) NULL,

	"IDПодразделения" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	"Подразделения" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Начальник"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDсотрдника" NVARCHAR2(255) NULL,

	"Сотрудник" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "График"
	ADD CONSTRAINT "График_FНачал_7022" FOREIGN KEY ("Начальник") REFERENCES "Начальник" ("primaryKey");

CREATE INDEX "График_IНачал_2948" on "График" ("Начальник");

ALTER TABLE "Прием"
	ADD CONSTRAINT "Прием_FПодраз_3232" FOREIGN KEY ("Подразделения") REFERENCES "Подразделения" ("primaryKey");

CREATE INDEX "Прием_IПодраз_9175" on "Прием" ("Подразделения");

ALTER TABLE "Прием"
	ADD CONSTRAINT "Прием_FНачаль_9623" FOREIGN KEY ("Начальник") REFERENCES "Начальник" ("primaryKey");

CREATE INDEX "Прием_IНачальник" on "Прием" ("Начальник");

ALTER TABLE "Прием"
	ADD CONSTRAINT "Прием_FДолжно_9967" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Прием_IДолжности" on "Прием" ("Должности");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FП_7847" FOREIGN KEY ("Подразделения") REFERENCES "Подразделения" ("primaryKey");

CREATE INDEX "Увольнение_IП_5706" on "Увольнение" ("Подразделения");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FД_5239" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Увольнение_IД_7170" on "Увольнение" ("Должности");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FН_4895" FOREIGN KEY ("Начальник") REFERENCES "Начальник" ("primaryKey");

CREATE INDEX "Увольнение_IН_8181" on "Увольнение" ("Начальник");

ALTER TABLE "Расчет"
	ADD CONSTRAINT "Расчет_FНачал_4497" FOREIGN KEY ("Начальник") REFERENCES "Начальник" ("primaryKey");

CREATE INDEX "Расчет_IНачал_8478" on "Расчет" ("Начальник");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_3036" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2503" on "Сотрудник" ("Должности");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FПо_7739" FOREIGN KEY ("Подразделения") REFERENCES "Подразделения" ("primaryKey");

CREATE INDEX "Сотрудник_IПо_4278" on "Сотрудник" ("Подразделения");

ALTER TABLE "Начальник"
	ADD CONSTRAINT "Начальник_FСо_3388" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Начальник_IСо_9381" on "Начальник" ("Сотрудник");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


