//В данном коде происходит нарушение Single-responsibility принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

type Data = {
  id: number;
  description: string;
};

class Info {
  public computeStatistics(data: Data[]): number {
    return data.length;
  }
  public computeReport(data: Data[]): string[] {
    return data.map((el) => el.description);
  }
}
