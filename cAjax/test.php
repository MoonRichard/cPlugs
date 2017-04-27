<?php
/**
 * 
 * @authors c-Ku (chyhoosun@gmail.com)
 * @date    2017-04-18 16:57:56
 * @version $Id$
 */

if (isset($_GET['test1']) && isset($_GET['test2'])) {
	echo $_GET['test1'] . $_GET['test2'];
} else {
	echo "fuck";
}