DROP TABLE IF EXISTS shoe;
DROP TABLE IF EXISTS image;

CREATE TABLE image
(
  id SERIAL PRIMARY KEY,
  urls text,
  timestamp timestamp default now()
);

CREATE TABLE shoe
(
  id SERIAL PRIMARY KEY,
  color text,
  type text,
  model text,
  sizes text,
  price int,
  image_id int REFERENCES image (id) on delete CASCADE on update CASCADE,
  avg_stars decimal,
  review_count int,
  timestamp timestamp default now()
);