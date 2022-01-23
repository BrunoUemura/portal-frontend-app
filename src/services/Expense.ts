import { decode } from "jsonwebtoken";
import { parseCookies } from "nookies";
import { api } from "./api";

type CreateExpenseType = {
  userId: string;
  title: string;
  amount: number;
  month: number;
  year: number;
  category: string;
};

export class Expense {
  static async findByUserId() {
    const { "dashboard.token": token } = parseCookies();
    const { id }: any = decode(token);

    try {
      const { data } = await api.get(`/expenses/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async create(body: CreateExpenseType) {
    try {
      const { data } = await api.post(`/expense`, {
        userId: body.userId,
        title: body.title,
        amount: body.amount,
        month: body.month,
        year: body.year,
        category: body.category,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
