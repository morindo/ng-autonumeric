/**
 * @author Abdelghani AINOUSS
 * @description
 *
 * autonumeric configuration, please refer http://autonumeric.org/guide for more details;
 */

import AutoNumeric from 'autonumeric';

export interface AutonumericOptionsDefault {
  allowDecimalPadding: AutoNumeric.options.allowDecimalPadding.always;
  alwaysAllowDecimalCharacter: AutoNumeric.options.alwaysAllowDecimalCharacter.doNotAllow;
  caretPositionOnFocus: AutoNumeric.options.caretPositionOnFocus.doNoForceCaretPosition;
  createLocalList: AutoNumeric.options.createLocalList.createList;
  currencySymbol: AutoNumeric.options.currencySymbol.euro;
  currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix;
  decimalCharacter: AutoNumeric.options.decimalCharacter.dot;
  decimalCharacterAlternative: AutoNumeric.options.decimalCharacterAlternative.none;
  decimalPlaces: AutoNumeric.options.decimalPlaces.two;
  decimalPlacesRawValue: AutoNumeric.options.decimalPlacesRawValue.useDefault;
  decimalPlacesShownOnBlur: AutoNumeric.options.decimalPlacesShownOnBlur.useDefault;
  decimalPlacesShownOnFocus: AutoNumeric.options.decimalPlacesShownOnFocus.useDefault;
  defaultValueOverride: AutoNumeric.options.defaultValueOverride.doNotOverride;
  digitalGroupSpacing: AutoNumeric.options.digitalGroupSpacing.three;
  digitGroupSeparator: AutoNumeric.options.digitGroupSeparator.comma;
  divisorWhenUnfocused: AutoNumeric.options.divisorWhenUnfocused.none;
  emptyInputBehavior: AutoNumeric.options.emptyInputBehavior.focus;
  eventBubbles: AutoNumeric.options.eventBubbles.bubbles;
  eventIsCancelable: AutoNumeric.options.eventIsCancelable.isCancelable;
  failOnUnknownOption: AutoNumeric.options.failOnUnknownOption.ignore;
  formatOnPageLoad: AutoNumeric.options.formatOnPageLoad.format;
  formulaMode: AutoNumeric.options.formulaMode.disabled;
  historySize: AutoNumeric.options.historySize.medium;
  isCancellable: AutoNumeric.options.isCancellable.cancellable;
  leadingZero: AutoNumeric.options.leadingZero.deny;
  maximumValue: AutoNumeric.options.maximumValue.tenTrillions;
  minimumValue: AutoNumeric.options.minimumValue.tenTrillions;
  modifyValueOnWheel: AutoNumeric.options.modifyValueOnWheel.modifyValue;
  negativeBracketsTypeOnBlur: AutoNumeric.options.negativeBracketsTypeOnBlur.none;
  negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.none;
  negativeSignCharacter: AutoNumeric.options.negativeSignCharacter.hyphen;
  noEventListeners: AutoNumeric.options.noEventListeners.addEvents;
  onInvalidPaste: AutoNumeric.options.onInvalidPaste.error;
  outputFormat: AutoNumeric.options.outputFormat.none;
  overrideMinMaxLimits: AutoNumeric.options.overrideMinMaxLimits.doNotOverride;
  positiveSignCharacter: AutoNumeric.options.positiveSignCharacter.plus;
  rawValueDivisor: AutoNumeric.options.rawValueDivisor.none;
  readOnly: AutoNumeric.options.readOnly.readWrite;
  roundingMethod: AutoNumeric.options.roundingMethod.halfUpSymmetric;
  saveValueToSessionStorage: AutoNumeric.options.saveValueToSessionStorage.doNotSave;
  selectNumberOnly: AutoNumeric.options.selectNumberOnly.selectNumbersOnly;
  selectOnFocus: AutoNumeric.options.selectOnFocus.select;
  serializeSpaces: AutoNumeric.options.serializeSpaces.plus;
  showOnlyNumbersOnFocus: AutoNumeric.options.showOnlyNumbersOnFocus.showAll;
  showPositiveSign: AutoNumeric.options.showPositiveSign.hide;
  showWarnings: AutoNumeric.options.showWarnings.show;
  styleRules: AutoNumeric.options.styleRules.none;
  suffixText: AutoNumeric.options.suffixText.none;
  symbolWhenUnfocused: AutoNumeric.options.symbolWhenUnfocused.none;
  unformatOnHover: AutoNumeric.options.unformatOnHover.unformat;
  unformatOnSubmit: AutoNumeric.options.unformatOnSubmit.keepCurrentValue;
  valuesToStrings: AutoNumeric.options.valuesToStrings.none;
  watchExternalChanges: AutoNumeric.options.watchExternalChanges.doNotWatch;
  wheelOn: AutoNumeric.options.wheelOn.focus;
  wheelStep: AutoNumeric.options.wheelStep.progressive;
}