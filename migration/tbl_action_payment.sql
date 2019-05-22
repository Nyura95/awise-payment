CREATE TABLE tbl_action_payment
(
  id int(5) not null
  auto_increment,
  token_id int
  (5) not null,
  statut int
  (5) not null,
  action_type_id int
  (5) not null,
  transaction_id int
  (5) not null,
  table_name varchar
  (255),
  version varchar
  (255),
  agent_user varchar
  (255),
  updated_at datetime,
  created_at datetime,
  primary key
  (id)
);