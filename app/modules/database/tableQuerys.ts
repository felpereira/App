const querys = [
  {
    migrationName: "create_initial_tables",
    sql: `PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS Board (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT);
          INSERT INTO Board (descricao) VALUES ('Open');
          INSERT INTO Board (descricao) VALUES ('Closed');
          CREATE TABLE IF NOT EXISTS Migrations (id INTEGER PRIMARY KEY AUTOINCREMENT, migration_name TEXT, executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
          INSERT INTO Migrations (migration_name) VALUES ('create_initial_tables');`,
  },
  {
    migrationName: `add_ordenacao_board`,
    sql: `ALTER TABLE Board ADD COLUMN ordenacao INTEGER;
          INSERT INTO Migrations (migration_name) VALUES ('add_ordenacao_board');`,
  },
  {
    migrationName: `alter_board_Open_Closed`,
    sql: `UPDATE Board SET ordenacao = 1 WHERE descricao = 'Open';
          UPDATE Board SET ordenacao = 99 WHERE descricao = 'Closed';
          INSERT INTO Migrations (migration_name) VALUES ('alter_board_Open_Closed');`,
  },
];

export default querys;
