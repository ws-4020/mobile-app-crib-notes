CREATE TABLE app_updates
(
  app_type VARCHAR(50) NOT NULL,
  supported_version   VARCHAR(255)  NOT NULL,
  PRIMARY KEY (app_type)
);
