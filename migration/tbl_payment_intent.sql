create table tbl_payment_intent
(
  id int(5) not null
  auto_increment,
  id_payment_intent int
  (5) not null,
  object varchar
  (255),
  amount int
  (8),
  capture_method varchar
  (255),
  charges TEXT,
  client_secret varchar
  (255),
  confirmation_method varchar
  (255),
  currency varchar
  (255),
  customer varchar
  (255),
  description varchar
  (255),
  id_payment_method int
  (5) not null,
  status varchar
  (255),
  id_user int
  (5) not null,
  updated_at datetime,
  created_at datetime,
  primary key
  (id)
);