import { TypeException } from '../exceptions/TypeException';
import { assertionTypes } from '../assertionTypes';

/**
 * Check if provided value is Not a Number
 * @param value
 * @param {string} message
 * @param {string} id
 * @returns void
 */
export function isNaN(value: any, message: string = '', id: string = ''): void {
  if (this.enabled && !Number.isNaN(value)) {
    throw TypeException.unexpectedType(assertionTypes.IS_NAN, value, '<NaN>', message, id);
  }
}