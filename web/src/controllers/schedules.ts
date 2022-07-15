import { api } from "../lib/api";

class schedules {
  async mostrar(data: string) {
    await api.get(`/listar/${data}`).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(`Errot ${err}`);
    });
  }
}

export default new schedules();