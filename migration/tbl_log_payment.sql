CREATE TABLE tbl_log_payment
(
  id int(5) not null
  auto_increment,
  action_id int
  (5) not null,
  locKey varchar
  (255),
  description varchar
  (255),
  updated_at datetime,
  created_at datetime,
  primary key
  (id)
);