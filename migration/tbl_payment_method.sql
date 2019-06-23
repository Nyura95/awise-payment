create table tbl_payment_method
(
  id int(5) not null
  auto_increment,
  id_payment_method varchar
  (255) not null,
  object varchar
  (255),
  billing_details TEXT,
  card TEXT,
  customer varchar
  (255),
  type varchar
  (255),
  id_user int
  (5),
  updated_at datetime,
  created_at datetime,
  primary key
  (id)
);