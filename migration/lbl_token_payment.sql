CREATE TABLE lbl_token_payment
(
  id int(5) not null
  auto_increment,
  locKey varchar
  (255) not null,
  label varchar
  (255) not null,
  updated_at datetime,
  created_at datetime,
  primary key
  (id)
);