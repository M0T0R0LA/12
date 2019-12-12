// Типы данных для разных переменных

// Целые числа (integer), в js это тип number
var my_integer = 2;

// Числа с плавающей точкой (float), в js это также тип number
var my_float = 1.21;

// Строки (string)
var my_string = '"Моя строка"';

// Особый тип переменной которая не задана (undefined)
var my_undef;

// «Булев» тип (boolean), обозначающий логические ИСТИНУ или ЛОЖЬ (true, false)
var my_bool = true;

// Простые массивы (array), в js это тип object
var my_array = [my_integer, 'azaza', 2.99, true];

// Именованные массивы типа ключ-значение (key-value array), в js это также тип object
var my_obj = { name: 'Алексей', age: 16 };

// Функция, отображающая значение переменной и её тип
function show_me_type(myvar) {
    console.log('Переменная ' + myvar + ' типа ' + typeof (myvar));
};

// Для каждой из перечисленных выше переменных
show_me_type(my_integer);
show_me_type(my_float);
show_me_type(my_string);
show_me_type(my_undef);
show_me_type(my_bool);
show_me_type(my_array);
show_me_type(my_obj);

// Записываем данные в js-объект, присваивая значение по ключу

var my_surname = "Ажнов"

var my_fullname = my_obj.name + ' ' + my_surname

my_obj.name = my_fullname

console.log(my_obj);
console.log("Hello, World!");
