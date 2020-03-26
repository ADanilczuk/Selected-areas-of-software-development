INSERT INTO public."OSOBA1"(
	"Id", "Imię", "Nazwisko", "Płeć", "Wiek")
	VALUES ((SELECT nextval('return_last_id')), ?, ?, ?, ?);
	
	
-- SEQUENCE: return_last_id

CREATE SEQUENCE return_last_id 
	START 1;
	
SELECT setval('return_last_id', (SELECT MAX("Id") FROM "OSOBA1")); 

ALTER SEQUENCE return_last_id 
    OWNER TO postgres;
	
---

INSERT INTO public."OSOBA2"(
	"Id", "Imię", "Nazwisko", "Płeć", "Wiek")
	VALUES (DEFAULT, ?, ?, ?, ?);
	
	
	
-- przykładowy select:

SELECT "Id", "Imię", "Nazwisko"
	FROM public."OSOBA2"
	WHERE "Id" = 1;
	
-- update:
UPDATE public.osoba2
	SET id=?, name=?, surname=?, gender=?, age=?
	WHERE <condition>;