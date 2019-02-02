-- -------------------------------------------------------------
-- TablePlus 1.4(188)
--
-- https://tableplus.com/
--
-- Database: issue3960
-- Generation Time: 2019-02-02 22:00:50.7060
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."account";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence
CREATE SEQUENCE IF NOT EXISTS acc_id_seq;

-- Table Definition
CREATE TABLE "public"."account" (
    "id" int4 NOT NULL DEFAULT nextval('acc_id_seq'::regclass),
    "username" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."company";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence
CREATE SEQUENCE IF NOT EXISTS comp_id_seq;

-- Table Definition
CREATE TABLE "public"."company" (
    "id" int4 NOT NULL DEFAULT nextval('comp_id_seq'::regclass),
    "name" varchar(255),
    "userId" int4,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."store";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence
CREATE SEQUENCE IF NOT EXISTS store_id_seq;

-- Table Definition
CREATE TABLE "public"."store" (
    "id" int4 NOT NULL DEFAULT nextval('store_id_seq'::regclass),
    "storeId" varchar(255) NOT NULL,
    "companyId" int4,
    "userId" int4,
    PRIMARY KEY ("id")
);

ALTER TABLE "public"."company" ADD FOREIGN KEY ("userId") REFERENCES "public"."account"("id") ON DELETE CASCADE;
ALTER TABLE "public"."store" ADD FOREIGN KEY ("userId") REFERENCES "public"."account"("id");
ALTER TABLE "public"."store" ADD FOREIGN KEY ("companyId") REFERENCES "public"."company"("id") ON DELETE CASCADE;
