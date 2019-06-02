CREATE TABLE tbl_action_payment_tour
(
  id int(5) not null
  auto_increment,
  token_id int
  (5),
  id_user int
  (5) not null,
  id_tour int
  (5) not null,
  id_booking int
  (5) not null,
  nb_people int
  (5) not null,
  amount int
  (5),
  body_send varchar
  (255),
  body_receive varchar
  (255),
  url_payment varchar
  (255),
  version varchar
  (255),
  agent_user varchar
  (255) not null,
  statut int
  (5),
  updated_at datetime not null,
  created_at datetime not null,
  primary key
  (id)
);