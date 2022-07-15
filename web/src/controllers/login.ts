
import { api } from "../lib/api";

class loginRoutes {
  async login(nome: string) {
    api.get(`/login/${nome}`)
      .then((res) => {

      })
      .catch((err) => {

      })
  }
}

export default new loginRoutes();