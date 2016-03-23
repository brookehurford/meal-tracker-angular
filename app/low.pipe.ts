import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "low",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    console.log('filter value: ', args[0]);
    var desiredKegState = args[0];
    console.log(desiredKegState);
    if (desiredKegState === "low") {
      return input.filter((keg) => {
        return keg.pintsLeft < 10;
      });
    } else {
      return input;
    }
  }
}
