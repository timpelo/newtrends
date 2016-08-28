<?php
header("Content-Type: text/html; charset=utf-8");
print '<?xml version="1.0" encoding="utf-8"?>';
?>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <title>PHP5 and XML-wellformed</title>
  </head>
  <body>
    <h1>PHP5 and XML-wellformed</h1>
    <p>Is <a href="books.xml">books.xml</a> wellformed? <strong>
    
    <?php
        $doc = new domDocument;
        if( $doc->load('books.xml') )
        {
             print("Yes it is!");
        }
        else
        {
            print("No it isn't");
        }
    ?>
    </strong></p>
    
    <hr/>
    <p>
       <?php show_source(__FILE__);?>
    </p>
  </body>
</html>