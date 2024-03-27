import { database } from "../database/databaseConnection";

export interface BoardModel {
  id: number;
  descricao: string;
  ordenacao: string;
}

export default class BoardService {
  listAllAsync = async () => {
    try {
      const retorno = await database.getAllAsync<BoardModel>(
        "SELECT * FROM Board ORDER BY ordenacao"
      );

      return retorno;
    } catch (error) {
      console.warn(error);
      return [];
    }
  };
  add = () => {};
}
