// Task 1:
const currentDay = [
    'კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკები',
    'შაბათი',
]
switch(currentDay) {
    case 0:
        console.log('კვირა');
        break;
    case 1:
        console.log('ორშაბათი')  ;
        break;
    case 2:
        console.log('სამშაბათი') ;
        break;
    case 3:
        console.log('ოთხშაბათი');
        break;
    case 4:
        console.log('ხუთშაბათი');
        break;
    case 5:
        console.log('პარასკები');
        break;
    case 6:
        console.log('შაბათი');
        break;                 
}
console.log(currentDay[0]);
console.log(currentDay[1]);
console.log(currentDay[6]);
console.log(currentDay[2]);
console.log(currentDay[3]);
console.log(currentDay[4]);
console.log(currentDay[5]);  

//switch (new Date().getDay()) {
//  case 0:
//      console.log('კვირა');
//      break;
//  case 1:
//      console.log('ორშაბათი')  ;
//      break;
//  case 2:
//      console.log('სამშაბათი') ;
//      break;
//  case 3:
//      console.log('ოთხშაბათი');
//      break;
//  case 4:
//      console.log('ხუთშაბათი');
//      break;
//  case 5:
//      console.log('პარასკები');
//      break;
//  case 6:
//      console.log('შაბათი');
//      break;                 
//}

// Task 2:
for(let i=0;i<100;i++){
    console.log(i);
}

// Task 3:
i=0;
while (i<50) {
    console.log(i);
    i++;
}

// Task 4:
i = 0;
do{  
    console.log(i)
    i++;
}
while(i<150)

// Task 5:
const numbersArray=[];
for(let  i=0; i<10000; i++ ){
    numbersArray.push(i * i) 
}
console.log(numbersArray);
