export const convertTime = unixTime => {

 // Months array
 var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

 // Convert timestamp to milliseconds
 var date = new Date(unixTime*1000);

 // Year
 var year = date.getFullYear();

 // Month
 var month = months_arr[date.getMonth()];

 // Day
 var day = date.getDate();

 // Hours
 var hours = date.getHours();

 // Minutes
 var minutes = "0" + date.getMinutes();

 // Seconds
 var seconds = "0" + date.getSeconds();

 // Display date time in MM-dd-yyyy h:m:s format
 var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

 return convdataTime
}

export const sortByHighest = (array, key) => array.sort((a, b) => b[key] - a[key])

export const sortAlphabetically = (array, key) => array.sort(function(a, b) {
    var textA = a[key].toUpperCase();
    var textB = b[key].toUpperCase();
    return letterCompare(textA, textB)
});

export const letterCompare = (textA, textB) => {
    return textA < textB ? -1 : (textA > textB) ? 1 : 0;
}
