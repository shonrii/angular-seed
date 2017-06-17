export class ArrayUtils {

  static isEmpty(array: any[]): boolean {
    if (!array || array.length === 0) {
      return true;
    }
    return false;
  }

}
