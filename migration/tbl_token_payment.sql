CREATE TABLE tbl_token_payment
(
  id int(5) not null
  auto_increment,
  token varchar
  (255) not null,
  flag_delete int
  (1) not null,
  statut int
  (5) not null,
  lifetime_max datetime not null,
  action_nb int
  (5) not null,
  action_max int
  (5) not null,
  user_id int
  (5) not null,
  updated_at datetime,
  created_at datetime,
  primary key
  (id)
);