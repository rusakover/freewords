document.getElementById('hiddenBlock').style.display='none';


function checkForm() {
    if (document.getElementById('nameField').value!='' || document.getElementById('summaField').value!='' || document.getElementById('dateField').value!='') 
        return true;
    else return false;
};
function summaPropisEN(){
 var text=document.getElementById('dateField').value;
 var resultDate;
 var userMounth;
var day=new Array(); // массив чисел месяца
		day[1] = 'Первого'; day[2] = 'Второго'; day[3] = 'Третьего';
		day[4] = 'Четвертого'; 	day[5] = 'Пятого'; 	day[6] = 'Шестого';
		day[7] = 'Седьмого'; 	day[8] = 'Восьмого'; 	day[9] = 'Девятого';
		day[10] = 'Десятого'; 	day[11] = 'Одиннадцатого'; 	day[12] = 'Двенадцатого';
		day[13] = 'Тринадцатого'; 	day[14] = 'Четырнадцатого'; day[15] = 'Пятнадцатого';
		day[16] = 'Шестнадцатого'; 	day[17] = 'Семнадцатого'; 	day[18] = 'Восемнадцатого';
		day[19] = 'Девятнадцатого'; day[20] = 'Двадцатого'; day[21] = 'Двадцать первого';
		day[22] = 'Двадцать второго'; day[23] = 'Двадцать третьего'; day[24] = 'Двадцать четвертого';
		day[25] = 'Двадцать пятого'; day[26] = 'Двадцать шестого'; 	day[27] = 'Двадцать седьмого';
		day[28] = 'Двадцать восьмого'; 	day[29] = 'Двадцать девятого'; 	day[30] = 'Тридцатого';
		day[31] = 'Тридцать первого'; 

		resultDate=text;
		var userDay;
		userDay=resultDate.substr(8,2); // из строки даты извлекается день (формат представления 2011-11-01 где 01 - день (первое)
		var Daystr;
		Daystr=day[parseInt(userDay)]; // значение из строки переводится с помощью функции parseInt в числовое значение, далее согласно массиву переменной Daystr присваивается строковое значение 
		var Mountstr;
		userMounth=resultDate.slice(5,-3);// из строки даты извлекается день (формат представления 2011-11-01 где 01 - день (первое)
	switch (userMounth) {
		case '01': 	Mountstr = ' января';	break;
		case '02':	Mountstr = ' февраля'; break;
		case '03': 	Mountstr = ' марта';break;
		case '04': 	Mountstr = ' апреля';break;
		case '05': 	Mountstr = ' мая';break;
		case '06': 	Mountstr = ' июня';break;
		case '07': 	Mountstr = ' июля';break;
		case '08': 	Mountstr = ' августа';break;
		case '09': 	Mountstr = ' сентября';break;
		case '10': 	Mountstr = ' октября';break;
		case '11': 	Mountstr = ' ноября';break;
		case '12': 	Mountstr = ' декабря';break;}
	

 resultDate=Daystr+Mountstr;
 if (resultDate!='') {
                document.getElementById('dateResult').innerHTML=resultDate;
                document.getElementById('hiddenBlock').style.display='';}
var kk=1;

 
 

}

function translateEN(){
        if (checkForm()==true) {  //проверка Chekform перед выполнением функции
            var text=document.getElementById('nameField').value;
            var transl=new Array(); // массив по Е.Н. Тамарченко
                transl['а']='a';
                transl['б']='b';
                transl['в']='v';
                transl['г']='g';
                transl['д']='d';
                transl['е']='e';
                transl['ё']='yo';
                transl['ж']='zh';
                transl['з']='z';
                transl['и']='i';
                transl['й']='y';
                transl['к']='k';
                transl['л']='l';
                transl['м']='m';
                transl['н']='n';
                transl['о']='o';
                transl['п']='p';
                transl['р']='r';
                transl['с']='s';
                transl['т']='t';
                transl['у']='u';
                transl['ф']='f';
                transl['х']='kx';
                transl['ц']='ts';
                transl['ч']='ch';
                transl['ш']='sh';
                transl['щ']='shсh';
                transl['ъ']='"';
                transl['ы']='y\'';
                transl['ь']='';
                transl['э']='e\'';
                transl['ю']='yu';
                transl['я']='ya';

                var result=''; // строка возврата
            	var kk=''; // переменная счетчик буквы в слове
            	kk=0; 
            	var backsymbol=''; // переменная прдыдущей буквы. Устанавливается значение при условии Е И О 
            	var currentsymbol=''; // текущий символ
            	text=text.toLowerCase(); // преобразование строки во все буквы строчные (маленькие) :))
            		switch (text.charAt(0)) {
						case 'е':
						result=result+"ye" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'и':
						result=result+"i" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'о':
						result=result+"o" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
						break; }
					           			
				text=text.toLowerCase();  // преобразование строки во все буквы строчные (маленькие) :))
            	for(i=kk;i<text.length;i++) // перебор всех букв
            		{
            			currentsymbol=text.charAt(i); // присваивание переменной значение текущего символа
            			if (currentsymbol=='е') { // начало цикла для "e"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'а' : case 'о' : case 'ю' : case 'у' :case 'э' :case 'е' :case 'ы' :case 'я' : case 'ь' :case 'ъ' : case 'и' : // тут перечисляем все условия для буквы Е (гласные + ь, ъ)
											currentsymbol='ye'; // если 'е' стоит после гласных и ь ъ то выводится 'ye'
											result+=currentsymbol;
									break;
									default:
										result+='e';} //
								}			
						else if (currentsymbol=='и') { // начало цикла для "и"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы И ( ь, ъ)
											currentsymbol='ie'; // если 'И' стоит после ь ъ то выводится 'ie'
											result+=currentsymbol;
									break;
										default:
										result+='i'; }
								}			
						else if (currentsymbol=='о') { // начало цикла для "о"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы О ( ь, ъ)
											currentsymbol='yo'; // если 'О' стоит после ь ъ то выводится 'yo'
											result+=currentsymbol;
									break;
										default:
										result+='o'; }
								}			
						
						else {
            					if(transl[text[i]]!=undefined) // если это не Е И О то выводится буква соответствующая массиву
            						result+=transl[text[i]]; 
            					else { result+=text[i]; }
							}
            			
            			
                } // конец перебора всех букв
            	result=result.toUpperCase(); // преобразование строки во все буквы прописные
            if (result!='') {
                document.getElementById('nameResult').innerHTML=result;
                document.getElementById('hiddenBlock').style.display='';
            } 
			
        } // Проверка checkForm
        else document.getElementById('nameResult').innerHTML='Заполните одно из полей!';
                document.getElementById('hiddenBlock').style.display='';
};
