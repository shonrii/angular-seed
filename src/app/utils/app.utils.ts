export class AppUtils {

  static trimFields(object: any) {
    for (const key of Object.keys(object)) {
      if (typeof object[key] === 'string') {
        object[key] = object[key].trim();
      }
    }
  }

}
