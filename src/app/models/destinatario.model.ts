
export class Destinatario {

  constructor(
      public destinatario_name?: string,
      public rut?: string,
      public email?: string,
      public bank?: string,
      public type_account?: string,
      public number_account?: string,
      public phone?: number,
      public uid?: string,
      public usuario?: string,
      public fecha?: Date
  ) {
    this.type_account = "";
    this.bank = "";
   }
}
