// var fs = require('fs'),readline = require('readline')
// var fresult=[];
// var count=0;
// var inputCSVFilePath = "javascript/Indicators.csv",
//    outputFilePath1 = "asiaFM.json",
//    outputFilePath = "top5.json";
//
//
// var csvFileRead = readline.createInterface({
//  input: fs.createReadStream(inputCSVFilePath)
// });
//
// var MAP_COUNTRIES_ASIA = ["AFG", "Bahrain", "Bangladesh", "Bhutan", "Myanmar", "Cambodia", "China", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Nepal",
// "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];
//
// csvFileRead.on('line',function(line){
//    var rows = line.split('/r/n');
//    var rowws=rows[0].split(',');
//    var n=rowws.length;
//    var countryN=rowws[0];
//    var indicator=rowws[n-3];
//    var year=rowws[n-2];
//    var value=rowws[n-1];
//    console.log(line);
//    switch (filterI) {
//    case "SP.DYN.LE00.IN":
//      if(countryN==1965)
//          {
//            obj1.country =countryN;
//            obj1.value = value ;
//            result2.push(obj1);
//            console.log(obj1);
//            count++;
//          }
//      break;
//  });
//  csvFileRead.on('close',function(line){
//      console.log(close);
//      console.log("Write");
//    });


// var fs = require('fs'),readline = require('readline')
// var result2 = [];
// var obj2 = [];
// var obj3 =[];
// var count = 0;
// var inputCSVFilePath = "javascript/Indicators.csv",
//    outputFilePath1 = "asiaFM.json",
//    outputFilePath = "top5.json";
//
// var csvFileRead = readline.createInterface({
//  input: fs.createReadStream(inputCSVFilePath)
// });
//
// var MAP_COUNTRIES_ASIA = ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Myanmar", "Cambodia", "China", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Nepal",
// "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];
//
// csvFileRead.on('line',function(line){
//  var catch1 = line.split('/r/n');//trimming
//  var rows = catch1[0].split(',');//splitting
//  var n =rows.length;
//  var filterC =rows[0];
//  var filterI =rows[n-3];
//  var filterY =rows[n-2];
//  var filterV =rows[n-1];
//  var obj1 = {};
//  switch (filterI) {
//    case "SP.DYN.LE00.IN":
//      if(filterY==1965)
//          {
//            obj1.country = filterC ;
//            obj1.value = filterV ;
//            result2.push(obj1);
//            console.log(obj1);
//            count++;
//          }
//      break;
  //  case "SP.DYN.LE00.FE.IN":
  //      switch (filterY) {
  //        case 1965:
   //
  //          break;
  //        default:
   //
  //      }
  //       break;
   // case "SP.DYN.LE00.MA.IN":
   //       console.log("caught Male");
   //       break;
  //  default:
 // }
 // });
 // csvFileRead.on('close',function(line){
 //   result2 =JSON.stringify(result2);
 //   fs.appendFile(outputFilePath, result2)
 //   });



 var fs = require('fs'),readline = require('readline')
 var result2 = [];
 var objFemale = [0,0,0,0,0,0,0,0,0,0,0,0];
 var objMale =[0,0,0,0,0,0,0,0,0,0,0,0];
 count = 0;
 var inputCSVFilePath = "Indicators.csv",
     outputFilePath1 = "Asia.json",
     outputFilePath = "topCountry.json";

 var csvFileRead = readline.createInterface({
   input: fs.createReadStream(inputCSVFilePath)
 });

 var MAP_COUNTRIES_ASIA = ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Myanmar", "Cambodia", "China", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Nepal",
 "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];
 var Years = [1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015];
 csvFileRead.on('line',function(line){
   var catch = line.split('/r/n');//trimming
   var rows = catch[0].split(',');//splitting
   var num =rows.length;
   var filterContry =rows[0];//Fetch country
   var filterI =rows[num-3];//Fetch Indicator
   var filterYear =rows[num-2];//Fetch Year
   var filterValue =rows[num-1];//Fetch Value
   var obj1 = {};
   if(count==10)
    process.exit();
   switch (filterI) {
     case "SP.DYN.LE00.IN":
       if(filterYear==1960)
           {
             obj1.country = filterContry ;
             obj1.value = filterValue ;
             result2.push(obj1);
           }
       break;
     case "SP.DYN.LE00.FE.IN":
             var x = parseInt(filterYear);
             if(Years.indexOf(x)>0)
               {
                 if(MAP_COUNTRIES_ASIA.indexOf(filterContry)>0)
                   {
                     var i=Years.indexOf(x);
                     objFemale[i]=objFemale[i]+parseInt(filterValue);
                   }
                 }
          break;
     case "SP.DYN.LE00.MA.IN":
         var x = parseInt(filterYear);
         if(Years.indexOf(x)>0)
             {
                 if(MAP_COUNTRIES_ASIA.indexOf(filterContry)>0)
                   {
                       var i=Years.indexOf(x);
                         objMale[i]=objMale[i]+parseInt(filterValue);

                 }
             }
           break;
     default:
   }
   });

   csvFileRead.on('close',function(line){
     var result1 =[];
     var obj2 ={};
     for(i=0;i<12;i++)
       {
         objMale[i]=objMale[i]/36;
         objFemale[i]=objFemale[i]/36;
         obj2.year = Years[i];
         obj2.Fval = objFemale[i];
         obj2.Mval = objMale[i];
         result1.push(obj2);
         obj2={};
       }
       result1 =JSON.stringify(result1);
       fs.appendFile(outputFilePath1, result1);
     var newArr = result2.sort(function(a, b) {
       return b.value - a.value;
     });
     result2 = [];
     for(i=0;i<5;i++)
         result2[i]=newArr[i];
     result2 =JSON.stringify(result2);
     fs.appendFile(outputFilePath, result2);
     console.log("End");
     });
