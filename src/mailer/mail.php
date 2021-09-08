<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$description = $_POST['smartrack_text'];
$message = '
Пользователь оставил данные  
Имя: ' . $name . '
Номер телефона: ' . $phone . '
E-mail: ' . $email . '
Текст сообщения:' . $description . '';

// mail('i.rumyantsev@corpitech.by', 'Smartrack3D', $message);
// mail('info@corpitech.by', 'Smartrack3D', $message);
mail('Kealstex@yandex.com', 'Smartrack3D', $message);
?>