<!DOCTYPE html>
<html>
<head>
	<title>ajax_showfile</title>
	<meta charset="utf-8">
<link rel=Stylesheet href="ajax_phonebook.css">
	<script type="text/javascript" src="phone_request.js"></script>
	<script type="text/javascript" src="jquery/jquery-1.11.3.js"></script>
	<?php
	include("showphone.php");
	// showpath("uploads");
	print_r(showpath("uploads"));
	?>
</head>
<body><ul>
<?php
$arr=showpath("uploads");
foreach ($arr as $key => $value) {

	echo "<li><span onclick=\"http_zapros('GET','uploads/".$value."',obrabotka)\">".$value."</span>"."<a href=\"uploads/".$value."\"> скачать</a></li>";

}
?>
</ul>
<form>
	<input type='submit' name="show" value="show">
	<hr>
	<textarea id="otvet" name="filetext" value="place for text" style="width:500px; height:200px;" >
		
	</textarea>
	<hr>
</form>
<form>
	<input type='submit' name="download" value="download">
</form>


	
<?php

$encoding=iconv_get_encoding('all');
print_r($encoding);

$filename="10.xml";
if (file_exists($filename)) {
    $xml = simplexml_load_file($filename);
    // print_r($xml);
}
else {
    exit('Failed to open '.$filename);
}
echo '<form method="get" action="10form.php">';
echo '<input type="submit" value="Добавить контакт">';
echo '<input type="hidden" name="filename" value="'.$filename.'">';
echo '<input type="hidden" name="add" value="1">';
echo '</form>';
echo "<table rules=\"all\">";
	echo "<tr>
		<td>ФИО</td>
		<td>Телефон</td>
		<td>Дата рождения</td>
		<td>Адрес</td>
		</tr>";
foreach ($xml as $key => $value) {
	echo "<tr>";
	echo "<td>";
	echo "<a href=\"10form.php?id=".$value['id']."&filename=".$filename."\">"
	    .iconv("UTF-8","cp1251",$value->fio->lastname)." "
	    .iconv("UTF-8","cp1251",$value->fio->firstname)." "
	    .iconv("UTF-8","cp1251",$value->fio->surname)."</a>";
	echo "</td>";
	echo "<td>";
	echo $value->phone;
	echo "</td>";
	echo "<td>";
	echo iconv("UTF-8","cp1251",$value->birthdate->day)."."
		.iconv("UTF-8","cp1251",$value->birthdate->month)."."
		.iconv("UTF-8","cp1251",$value->birthdate->year);
	echo "</td>";
	echo "<td>";
	echo iconv("UTF-8","cp1251",$value->adress->country).", "
		.iconv("UTF-8","cp1251",$value->adress->city);
	echo "</td>";
	echo "</tr>";
}
echo "</table>";
?>
</body>
</html>
