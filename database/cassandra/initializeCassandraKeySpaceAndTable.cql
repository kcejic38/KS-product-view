DROP KEYSPACE IF EXISTS ks_abibas;

CREATE KEYSPACE IF NOT EXISTS ks_abibas WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 1};

DROP TABLE IF EXISTS ks_abibas.shoes;

CREATE TABLE ks_abibas.shoes (
  id uuid, 
  color text, 
  type text, 
  model text, 
  sizes text, 
  price int, 
  imagesUrlsJSONarr text, 
  avg_stars decimal, 
  review_count int, 
  PRIMARY KEY (id, model)
);

-- Example:
-- INSERT INTO ks_abibas.shoes (
--     id, color, type, model, sizes, price, imagesUrlsJSONarr, avg_stars, review_count
-- ) VALUES (
--     now(), 
--     'RAW WHITE - RAW WHITE - HI-RES YELLOW',
--     'Womens originals',
--     'Continental 80 Shoes',
--     '6, 6.5, 7, 8, 8.5, 9, 9.5',
--     180,
--     'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Cloudfoam_QT_Racer_Shoes_White_F34701_010_hover_standard.jpg',
--     4.3,
--     229
-- );
