function doPost(e) {
    const sheetUrl = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1ZrHbhAEYc51rOn-Iq5IF8T6Mogul-hj3qv2BdyHv-JE/edit?gid=0#gid=0")
    
    const sheet = sheetUrl.getSheetByName('Sheet1')
    
    let data = e.parameter
    sheet.appendRow([data.Name, data.Email, data.College, data.Phone])
    
    return ContentService.createTextOutput('Added..')
}
  