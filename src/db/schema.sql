DROP TABLE IF EXISTS Todo;
CREATE TABLE IF NOT EXISTS Todo (id INTEGER PRIMARY KEY, description TEXT, is_done INTEGER NOT NULL DEFAULT 0);
INSERT INTO Todo (id, description) VALUES (1, 'todo1-Just for testing'), (2, 'todo2'), (3, 'todo3');
