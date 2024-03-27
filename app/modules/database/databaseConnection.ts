import * as SQLite from "expo-sqlite/next";

export const database = await SQLite.openDatabaseAsync("banco.db");

export const tableDoesNotExistAsync = async (table: string) => {
  try {
    // Verifica se a tabela existe realizando uma consulta
    await database.getFirstAsync(`SELECT * FROM ${table}`);

    // Se a consulta foi bem-sucedida, a tabela existe
    return false;
  } catch (error) {
    // Se houver um erro, a tabela não existe
    return true;
  }
};
