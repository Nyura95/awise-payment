create table tbl_connect_guide
(
  id int(5) not null
  auto_increment,
  connect_token varchar
  (255) not null,
  id_guide int
  (5) not null,
  stripe_publishable_key varchar
  (255) not null,
  scope:
  varchar
  (255) not null,
  stripe_user_id varchar
  (255) not null,
  refresh_token varchar
  (255) not null,
  access_token varchar
  (255) not null,
  primary key
  (id)
);