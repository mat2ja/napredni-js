export class News {
  constructor(
    public name: {
      firstname: string;
      lastname: string;
    } = {
      firstname: '',
      lastname: '',
    },
    public email: string = '',
    public password: string = '',
    public category: string = '',
    public tekst: string = ''
  ) {}
}
