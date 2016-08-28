<?php
    $name = $_GET['name'];
    $email = $_GET['email'];

    $namepost = $_POST["name"];
    $emailpost = $_POST["email"];

    echo "GET <br />";
    echo "Welcome $name your email is $email <br />";  
    echo "POST <br />";  
    echo "Welcome $namepost your email is $emailpost <br />";
?>