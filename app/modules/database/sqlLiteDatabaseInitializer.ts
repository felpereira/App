import { useEffect, useState } from "react";
import querys from "./tableQuerys";
import { database, tableDoesNotExistAsync } from "./databaseConnection";

export function useDatabaseInitializer() {
  const [loadedDataBase, setLoadedDataBase] = useState(false);
  const [errorDataBase, setErrorDataBase] = useState();

  useEffect(() => {
    const initializeDatabase = async () => {
      console.log("init");
      try {
        const tableMigration = "Migrations";

        if (await tableDoesNotExistAsync(tableMigration)) {
          await Promise.all(
            querys.map(async (element) => {
              await database.execAsync(element.sql);
            })
          );
        } else {
          const allMigrationsExecuted = await database.getAllAsync<{
            migration_name: string;
          }>("SELECT * FROM Migrations");

          const executeQueries = querys.filter(
            (x) =>
              !allMigrationsExecuted.some(
                (y) => x.migrationName === y.migration_name
              )
          );

          if (executeQueries.length > 0) {
            await Promise.all(
              executeQueries.map(async (element) => {
                await database.execAsync(element.sql);
              })
            );
          }
        }
      } catch (error: any) {
        console.error("Erro durante a configuração do banco de dados:", error);
        setErrorDataBase(error);
      }

      setLoadedDataBase(true);
    };

    initializeDatabase();
  });

  return [loadedDataBase, errorDataBase];
}
