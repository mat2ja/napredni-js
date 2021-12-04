import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mnozi",
  pure: false,
})
export class MnoziPipe implements PipeTransform {
  transform(ulaz: any[], a?: number): any {
    if (a == undefined) a = 2;
    if (ulaz == undefined) return undefined;

    let izlaz = [];

    izlaz = ulaz.map((country) => {
      country.duplo = country.population * a;
      return country;
    });

    console.log(izlaz);
    return izlaz;
  }
}
