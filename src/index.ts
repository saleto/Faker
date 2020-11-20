import * as faker from "faker";
import { MockCSV } from "./MockCSV";

var fs = require('fs');

// var fs = require('browserify-fs');
  // const a = document.createElement("a");


const mockCSV = new MockCSV(
  {
    "FirstName": "{{name.firstName}}",
    "LastName": "{{name.lastName}}",
    "CompanyName": "{{company.companyName}}",
    "JobTitle": "{{name.jobTitle}}",
    "Email": "{{internet.email}}",
    "Mobile": "{{phone.phoneNumberFormat}}",
    "Address": "{{address.streetAddress}}",
    "Postcode": "{{address.zipCode}}",
    "City": "{{address.city}}",
    "Country": "Norway",
    "KAM": "Contemi Testing",
    "Source": "Company",
  
  },
  10
);

let csv = mockCSV.toString()

let ele = 'csv';
let element = document.getElementById(ele);


function printCSVtoHTML(csv) {
  element.innerHTML = csv;
  console.log(csv); 
}

printCSVtoHTML(csv)



// console.log(mockCSV.toString());
// console.log(mockCSV.rows[2]["First Name"]);