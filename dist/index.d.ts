import countryPhoneData from './data/country_phone_data';
export interface PhoneInvalidResult {
    isValid: false;
    phoneNumber: null;
    countryIso2: null;
    countryIso3: null;
    countryCode: null;
}
export interface PhoneValidResult {
    isValid: true;
    phoneNumber: string;
    countryIso2: string;
    countryIso3: string;
    countryCode: string;
}
export type PhoneResult = PhoneInvalidResult | PhoneValidResult;
/**
 * @typedef {Object} Option
 * @property {string=} country - country code in ISO3166 alpha 2 or 3
 * @property {boolean=} validateMobilePrefix - true to validate phone number prefix
 * @property {boolean=} strictDetection - true to disable remove truck code and detection logic
 *
 * @param {string} phoneNumber - phone number
 * @param {Option} option
 * @returns {{phoneNumber: string|null, countryIso2: string|null, countryIso3: string|null}}
 */
export default function phone(phoneNumber: string, { country, validateMobilePrefix, strictDetection }?: {
    country?: string;
    validateMobilePrefix?: boolean;
    strictDetection?: boolean;
}): PhoneResult;
export { phone, countryPhoneData, };
