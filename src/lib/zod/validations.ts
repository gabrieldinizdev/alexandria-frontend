const VALIDATIONS_NAMESPACE = "Shared.Validations";

/******************************************************************************
 * COMMON VALIDATIONS
 ******************************************************************************/

export const REQUIRED_FIELD = `${VALIDATIONS_NAMESPACE}.required`;

/******************************************************************************
 * EMAIL VALIDATIONS
 ******************************************************************************/

export const EMAIL_IS_INVALID = `${VALIDATIONS_NAMESPACE}.invalidEmail`;
export const EMAIL_IS_REQUIRED = `${VALIDATIONS_NAMESPACE}.requiredEmail`;
export const EMAIL_IS_TOO_SHORT = `${VALIDATIONS_NAMESPACE}.tooShortEmail`;
export const EMAIL_IS_TOO_LONG = `${VALIDATIONS_NAMESPACE}.tooLongEmail`;

/******************************************************************************
 * PASSWORD VALIDATIONS
 ******************************************************************************/

export const PASSWORD_IS_REQUIRED = `${VALIDATIONS_NAMESPACE}.requiredPassword`;
export const PASSWORD_IS_TOO_SHORT = `${VALIDATIONS_NAMESPACE}.tooShortPassword`;
export const PASSWORD_IS_TOO_LONG = `${VALIDATIONS_NAMESPACE}.tooLongPassword`;
