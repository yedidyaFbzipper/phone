import countryPhoneData from '../data/country_phone_data';
type GetArrayElementType<T extends readonly any[]> = T extends readonly (infer U)[] ? U : never;
export type CountryPhoneDataItem = GetArrayElementType<typeof countryPhoneData>;
/**
 * @param {string=} country - country code alpha 2 or 3
 * @returns {{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with, phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string, string, string, string], phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string], phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string], phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string, string], phone_number_lengths: [number]}|null}
 */
export declare function findCountryPhoneDataByCountry(country: string): {
    alpha2: string;
    alpha3: string;
    country_code: string;
    country_name: string;
    mobile_begin_with: string[];
    phone_number_lengths: number[];
} | null;
export declare function findExactCountryPhoneData(phoneNumber: string, validateMobilePrefix: boolean, countryPhoneDatum: CountryPhoneDataItem): {
    alpha2: string;
    alpha3: string;
    country_code: string;
    country_name: string;
    mobile_begin_with: string[];
    phone_number_lengths: number[];
} | null;
export declare function findPossibleCountryPhoneData(phoneNumber: string, validateMobilePrefix: boolean, countryPhoneDatum: CountryPhoneDataItem): {
    alpha2: string;
    alpha3: string;
    country_code: string;
    country_name: string;
    mobile_begin_with: string[];
    phone_number_lengths: number[];
} | null | undefined;
/**
 * get country phone data by phone number
 * the phone number must include country code as the complete phone number includes the plus sign
 * @param phoneNumber
 * @param validateMobilePrefix
 * @returns {{exactCountryPhoneData: (*), possibleCountryPhoneData: (*)}}
 */
export declare function findCountryPhoneDataByPhoneNumber(phoneNumber: string, validateMobilePrefix: boolean): {
    exactCountryPhoneData: {
        alpha2: string;
        alpha3: string;
        country_code: string;
        country_name: string;
        mobile_begin_with: string[];
        phone_number_lengths: number[];
    } | null | undefined;
    possibleCountryPhoneData: {
        alpha2: string;
        alpha3: string;
        country_code: string;
        country_name: string;
        mobile_begin_with: string[];
        phone_number_lengths: number[];
    } | null | undefined;
};
/**
 *
 * @param {string} phone - phone number without plus sign, with or without country calling code
 * @param {Object} countryPhoneDatum - iso 3166 data
 * @param {String} countryPhoneDatum.country_code - country calling codes
 * @param {Array} countryPhoneDatum.phone_number_lengths - all available phone number lengths for this country
 * @param {Array} countryPhoneDatum.mobile_begin_with - mobile begin with number
 * @param {boolean} validateMobilePrefix - true if we skip mobile begin with checking
 * @param {boolean} plusSign - true if the input contains a plus sign
 * @returns {*|boolean}
 */
export declare function validatePhoneISO3166(phone: string, countryPhoneDatum: CountryPhoneDataItem, validateMobilePrefix: boolean, plusSign: boolean): boolean;
export {};
