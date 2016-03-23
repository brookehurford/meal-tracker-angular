// Model
export class Keg {
  public low: boolean = false;
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number, public pintsLeft: number){
  }
}
