export class MySQLProduct {
  getProductById(productId: number): string {
    return `MySQL: Exibindo dados do produto: ${productId}`;
  }
}
