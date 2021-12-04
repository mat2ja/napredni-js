import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "prosjek",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(ulaz: any[]): any {
    let izlaz = [];
    if (ulaz == undefined) return undefined;

    izlaz = ulaz.map(function (kolegij) {
      let prosjek = 0;
      kolegij.ocjene.forEach(function (ocjena) {
        prosjek += ocjena;
      });
      prosjek /= kolegij.ocjene.length;

      kolegij.prosjek = prosjek;

      return kolegij;
    });

    izlaz.sort(function (a, b) {
      if (a.prosjek < b.prosjek) return 1;
      else return -1;
    });

    return izlaz;
  }
}
