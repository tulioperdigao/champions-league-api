# 🏆 Champions League API

Uma API construída com Node.js + TypeScript  e Express seguindo a arquitetura em camadas (N Layers) para simular os dados da UEFA Champions League 2025.

O projeto foca em práticas profissionais como separação de responsabilidades, tipagem com interfaces, controle por serviços e repositórios, e manipulação de dados via JSON.

---


## 🚀 Como Usar

### 1. Clone o projeto

```bash
git clone https://github.com/tulioperdigao/champions-league-api.git
cd champions-league-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
npm run dev
```

> O servidor estará disponível em: `http://localhost:3333`

---

## 🔌 Endpoints Disponíveis

### 🧍 Players

| Método | Rota                  | Descrição                        |
|--------|------------------------|----------------------------------|
| GET    | `/api/players/list`   | Lista todos os jogadores         |
| GET    | `/api/players/:id`    | Retorna um jogador por ID        |
| POST   | `/api/players`        | Adiciona um novo jogador         |
| PATCH  | `/api/players/:id`    | Atualiza um jogador por ID       |
| DELETE | `/api/players/:id`    | Remove um jogador por ID         |

### 🏟️ Clubs

| Método | Rota               | Descrição                         |
|--------|--------------------|-----------------------------------|
| GET    | `/api/clubs/list` | Lista todos os clubes participantes |

---

## 🧠 Arquitetura (N Layers)

- **Controllers:** Recebem requisições e direcionam para os serviços
- **Services:** Contêm as regras de negócio
- **Repositories:** Isolam a lógica de acesso aos dados (JSON)
- **Models:** Tipagens via interfaces (`PlayerModel`, `ClubModel`)
- **Routes:** Mapeiam os endpoints para os controllers

---

## 💡 Exemplo de JSON (Player)

```json
{
  "id": 1,
  "name": "Lionel Messi",
  "club": "Paris Saint-Germain",
  "nationality": "Argentina",
  "position": "Forward",
  "statistics": {
    "Overall": 93,
    "Pace": 85,
    "Shooting": 94,
    "Passing": 91,
    "Dribbling": 95,
    "Defending": 38,
    "Physical": 65
  }
}
```

---

## 🧪 Testando com Thunder Client ou Postman

- `GET http://localhost:3333/api/players/list`
- `GET http://localhost:3333/api/clubs/list`
- `POST http://localhost:3333/api/players`
- `PATCH http://localhost:3333/api/players/1`
- `DELETE http://localhost:3333/api/players/1`

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 📌 Autor

Desenvolvido por **Tulio Castro**  
🔗 [LinkedIn](https://www.linkedin.com/in/tulio-perdigao/) • [GitHub](https://github.com/tulioperdigao)
