const SHEET_ID = 'xxxxx';
const SHEET_NAME = 'xxxxxx';
isSheetExist(SHEET_ID, SHEET_NAME);

/**
 * シート存在チェックを行う
 * 
 */
function isSheetExist(sheetId, sheetName) {
  let spreadsheet = SpreadsheetApp.openById(sheetId);
  let ss = spreadsheet.getSheetByName(sheetName);
  if (ss) {
    return true;// 存在する
  }
  else {
    return false;
  }
}