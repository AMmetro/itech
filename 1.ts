//В данном коде происходит нарушение Single-responsibility принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

type Data = {
  id: number;
  description: string;
};

class Info1 {
  public computeStatistics(data: Data[]): number {
    console.log(data.length);   
    return data.length;
  }    
}

class Info2 {
  public computeReport(data: Data[]): string[] {  
    console.log(data.map((el) => el.description));
    return data.map((el) => el.description);
  }
  }

let info1= new Info1()
let info2= new Info2()
// info1.computeStatistics([{id:22,description:"hello"},{id:33,description:"bye"}])
// info2.computeReport([{id:22,description:"hello"},{id:33,description:"bye"}])