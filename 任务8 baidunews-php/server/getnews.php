<?php
	header("Content-type: application/json; charset=utf-8");
	require_once('db.php');
	if ($link) {
		//执行成功的过程
		//
		//
		if (@$_GET['newstype']) {//加@或者isset()包起来
			$newstype=$_GET['newstype'];
			$sql="SELECT * FROM `news` WHERE `newstype` ='{$newstype}' order by id desc";//order by id desc倒序插入
			mysqli_query($link,"SET NAMES utf8");
			$result=mysqli_query($link,$sql);
			$senddata=array();
			while ($row=mysqli_fetch_assoc($result)) {
				array_push($senddata,array(
						'id' =>$row['id'],
						'newstype' =>$row['newstype'],
						'newstitle' =>$row['newstitle'],
						'newsimg' =>$row['newsimg'],
						'newstime' =>$row['newstime'],
						'newssrc' =>$row['newssrc']
						));
			}
			echo json_encode($senddata);
		}else{
			$sql='SELECT * FROM news order by id desc';//order by id desc倒序插入
			mysqli_query($link,"SET NAMES utf8");
			$result=mysqli_query($link,$sql);
			$senddata=array();
			while ($row=mysqli_fetch_assoc($result)) {
				array_push($senddata,array(
						'id' =>$row['id'],
						'newstype' =>$row['newstype'],
						'newstitle' =>$row['newstitle'],
						'newsimg' =>$row['newsimg'],
						'newstime' =>$row['newstime'],
						'newssrc' =>$row['newssrc']
					));
			}
			echo json_encode($senddata);
		}
	}else{
		echo json_encode(array('success'=>'none'));
	}
	mysqli_close($link);

 ?>