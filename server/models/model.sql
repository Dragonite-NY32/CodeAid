CREATE TABLE Posts (
	id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	title varchar(255) NOT NULL,
	content text NOT NULL,
	timestamp TIMESTAMP(255) DEFAULT Now(),
	author varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);


CREATE TABLE Topics_in_posts (
	post_id INTEGER NOT NULL,
	topic_id INTEGER NOT NULL,
	CONSTRAINT Topics_in_posts_pk PRIMARY KEY (post_id,topic_id)
) WITH (
  OIDS=FALSE
);


CREATE TABLE Topics (
	id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	name varchar(255) NOT NULL,
	description varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);


ALTER TABLE Topics_in_posts ADD CONSTRAINT Topics_in_posts_fk0 FOREIGN KEY (post_id) REFERENCES Posts(id);
ALTER TABLE Topics_in_posts ADD CONSTRAINT Topics_in_posts_fk1 FOREIGN KEY (topic_id) REFERENCES Topics(id);




