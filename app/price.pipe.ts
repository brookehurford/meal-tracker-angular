import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "price",
  pure: false
})
export class PricePipe implements PipeTransform {
  transform(input: Keg[], args) {
    var priceState = args[0];
    console.log(priceState);
    if (priceState === "deal") {
      return input.filter((keg) => {
        return keg.price < 5;
      });
    } else {
      return input;
    }
  }
}
