// import React from "react";

// const SHEET_ID = "1XlMu86UlPjD3ujKL_vV8KEP0S7ZI5P4iLsy_DAPtt48";
// const ACCESS_TOKEN =
//   "ya29.a0Ae4lvC35e51ZDCYR3lUkGPBVYyPQnECun_WcciFNx0tOuv7IpjIqGCx3Drf7sSssq9HGBIVrDLcPwrOX9kJlAtlgq9FUXolguRwniiAYvjpgY44YRed501w6J8rsfHrYbypUl_gefIc6Jljnue0dWLV8IsIoCNpiZRM";

// class App extends React.Component {
//   updateSheetValues = () => {
//     fetch(
//       `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           //update this token with yours.
//           Authorization: `Bearer ${ACCESS_TOKEN}`
//         },
//         body: JSON.stringify({
//           requests: [
//             {
//               repeatCell: {
//                 range: {
//                   startColumnIndex: 0,
//                   endColumnIndex: 1,
//                   startRowIndex: 0,
//                   endRowIndex: 1,
//                   sheetId: 0
//                 },
//                 cell: {
//                   userEnteredValue: {
//                     numberValue: 10
//                   }
//                 },
//                 fields: "*"
//               }
//             }
//           ]
//         })
//       }
//     );
//   };
//   render() {
//     return (
//       <div className="App">
//         hello world
//         <button onClick={this.updateSheetValues}>Update A1</button>
//       </div>
//     );
//   }
// }

// export default App;
