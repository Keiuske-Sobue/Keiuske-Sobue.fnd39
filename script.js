'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テストの宣言//

let flwCountText = "";

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

//以下で問題を解く//

//全体秒数カウントの設定
	　
	let PassSec = 0; //PassSec : 秒数カウント用変数
	　　
	let gameEndCheck = "時間あり";
	document.getElementById("endcount").disabled = true; //経過時間の表示

  let PassageID;
	　　
	function showPassage() {
		PassSec++;
		document.getElementById("startcount").disabled = true; // 開始ボタンの無効化
    document.getElementById("endcount").disabled = true // リセットボタン無効化
		let msg = PassSec + "秒が経過！ / 制限時間60秒";
		document.getElementById("PassageArea").innerHTML = msg; // 表示更新
		if (PassSec >= 60) {　
			gameEndCheck = "タイムアウト!";
			document.getElementById("GameEnd").innerHTML = gameEndCheck;
      document.getElementById("GameEnd").style.backgroundColor = "red";
      document.getElementById("GameEnd").style.width = "150px";
			clearInterval(PassageID);
			document.getElementById("endcount").disabled = false;
      document.getElementById("flwButton").disabled = true;
		}
	}

	//経過時間カウントの開始
	function startShowing() {
		PassSec = 0; // カウンタのリセット
		PassageID = setInterval(showPassage, 1000); // タイマーをセット(1000ms間隔)
    document.getElementById("flwButton").disabled = false;
    document.getElementById("入力フォーム").disabled = false;
		// document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
	}

	// 繰り返し処理のリセット
	function stopReset() {
    PassSec = 0;
		clearInterval(PassageID); // タイマーのクリア
		let msg = "(クリア)";
		document.getElementById("PassageArea").innerHTML = msg
		let gameEndCheck = "  ";
		document.getElementById("GameEnd").innerHTML = gameEndCheck;
		document.getElementById("startcount").disabled = false; // 開始ボタンの有効化
    flwCounter = 0;
    flwCountText = flwCounter + "本/5本";
    document.getElementById("flwCount").innerHTML = flwCountText;
    flwBoxImageName = "花0本花束.png";
	  document.getElementById("flwBoxImage").src = flwBoxImageName;
    document.getElementById("flwClickCount").innerHTML = "";
    jouroUp();
    seedFlw = `種と花0.png`;
    document.getElementById("種と花").src = seedFlw;
    document.getElementById("入力フォーム").value = "";
    document.getElementById("入力フォーム").disabled = true;
    flwClickCounter = 0;
    document.getElementById("flwClickCount").innerHTML = `${flwClickCounter}/${flwClickTarget}`;
	}
  
  //入力フォームを最初は無効化
  document.getElementById("入力フォーム").disabled = true;

	//flwCounterの宣言と花カウンター文の実装
	　　
	let flwCounter = 0;
	flwCountText = flwCounter + "本/5本"
	document.getElementById("flwCount").innerHTML = flwCountText;

	//flwCounterに基づいた画像の選択
	let flwBoxImageName = "花0本花束.png";
	document.getElementById("flwBoxImage").src = flwBoxImageName;

  //花 目標数の設定
  let flwPoint = 0;
  const flwData = [
    {color : "赤", flwClick : 2},
    {color : "黄色", flwClick : 2},
    {color : "白", flwClick : 2},
    {color : "ピンク", flwClick : 2},
    {color : "白", flwClick : 2},
  ]

   //クリック数の目標を設定
  let flwClickTarget = flwData[0]["flwClick"] ;

  //花ゲットゲームのクリックカウンターを定義
  const plusButton = document.querySelector("button");
  let flwClickCounter = 0;
  document.getElementById("flwClickCount").innerHTML = `${flwClickCounter}/${flwClickTarget}`;


  //ボタンクリックの機能を宣言　flwClickFunc
  //クリックの数だけancClickCounterを増やす
  //クリック数が目標に達したらコメント表示しflwClickCounterをリセット

  //花をゲットした際に出す関数を先に定義
  let flwGetMessage = "";
  
  //花クリックゲームのボタン名を定義。クリックorリセット
  let flwClickButtonMessage = "お題をタイプしたらクリック！";
  document.getElementById("flwButton").innerHTML = flwClickButtonMessage;
　
  //じょうろアクションの定義
  let jouroImage = "じょうろ水なし.png";
  document.getElementById("じょうろアクション").src = jouroImage;
  function jouroDown() {
    jouroImage = "じょうろ水あり.png";
    document.getElementById("じょうろアクション").src = jouroImage;
  }
  function jouroUp() {
    jouroImage = "じょうろ水なし.png";
    document.getElementById("じょうろアクション").src = jouroImage;
  }

  //種と花
  let seedFlw = `種と花0.png`;
  document.getElementById("種と花").src = seedFlw;

  //お題の定義
  let odaiArray = ["pen", "apple", "book", "cat", "dog", "tree", "sun", "moon", "star", "car", "house", "ball", "bird", "fish", "flower", "rain", "snow", "cloud", "wind", "fire", "water", "earth", "sky", "light", "dark", "day", "night", "time", "world", "life", "love", "hope", "peace", "joy", "smile", "laugh", "cry", "happy", "sad", "angry", "fear", "brave", "kind", "friend", "family", "school", "work", "play", "run", "jump", "walk", "talk", "read", "write", "sing", "dance", "draw", "paint", "eat", "drink", "sleep", "wake", "open", "close", "give", "take", "come", "go", "find", "lose", "win", "begin", "end", "start", "stop", "help", "listen", "think", "know", "see", "hear", "touch", "feel", "smell", "taste", "look", "watch", "find", "hide", "buy", "sell", "make", "build", "clean", "wash", "cook", "bake", "fly", "swim", "ride"];
  
  //表示するお題を定義
  let odaiResult = "";

  //お題functionの定義
   function odaiChoice() {
    odaiResult = odaiArray[Math.floor(Math.random() * 100)];
    document.getElementById("お題").textContent = `お題 : ${odaiResult}`;
  }
  
  odaiChoice();

　//花カウンター5本によるゲーム終了functionの定義
　　function gameEndFunc() {
     flwClickButtonMessage = "ゲーム終了!!!";
     document.getElementById("flwButton").innerHTML = flwClickButtonMessage;
     document.getElementById("flwButton").disabled = true;
     flwGetMessage = "";
     clearImageAppear();
    };

  let typingResult = "";

  //タイプ結果の確認function => true/falseを返す
    function checkTyping() {
      typingResult = document.getElementById("入力フォーム").value;
      return typingResult === odaiResult;
    }
    
  //タイプ結果が〇の場合のfunction
    function typingOK() {
      flwClickCounter = flwClickCounter + 1;
      jouroDown();
      document.getElementById("flwClickCount").innerHTML = `${flwClickCounter}/${flwClickTarget}`;
      document.getElementById("入力フォーム").value = "";
      if ( flwClickCounter === flwClickTarget) {
        document.getElementById("flwClickCount").innerHTML = `${flwClickCounter}/${flwClickTarget}`;
        flwCounter = flwCounter + 1;
        flwCountText = flwCounter + "本/5本";
        document.getElementById("flwCount").innerHTML = flwCountText;
        flwBoxImageName = "花" + flwCounter +"本花束.png";
        document.getElementById("flwBoxImage").src = flwBoxImageName;
        flwClickButtonMessage = "次の花へGO!!!";
        document.getElementById("flwButton").innerHTML = flwClickButtonMessage;
        seedFlw = `種と花${flwCounter}.png`;
        document.getElementById("種と花").src = seedFlw;
        flwClickCounter = flwClickCounter + 1;
        document.getElementById("入力フォーム").disabled = true;
        odaiResult = "";
        document.getElementById("お題").textContent = `お題 : ${odaiResult}`;
      } else {
        document.getElementById("flwClickCount").innerHTML = `${flwClickCounter}/${flwClickTarget}`;
      }
    }
    
    //次の花へ行くfunction
    function nextFlw() {
      flwClickCounter = 0;
      document.getElementById("入力フォーム").disabled = false;
      document.getElementById("flwClickCount").innerHTML = `${flwClickCounter}/${flwClickTarget}`;
      flwClickButtonMessage = "お題をタイプしたらクリック！";
      document.getElementById("flwButton").innerHTML = flwClickButtonMessage;
      flwGetMessage = "";
      jouroUp();
      seedFlw = `種と花0.png`;
      document.getElementById("種と花").src = seedFlw;
    }　
    


   //タイプ結果が〇の場合のfunction
   function typingNG()  {
    document.getElementById("お題").textContent = `お題 : ${odaiResult} => エラー!!!`;
   }

      //★★★花ゲットアクションの定義★★★
      //花ゲット判定に関するクリック数記録機能
      //クリックごとに花カウンター+1、
      //ターゲット越えを判定
      //  =>超えたらflwCounter +1、
      //    flwCountTextの更新、
      // 　 flwBoxImageNameを更新
      //    ボタンをクリック!!!から次!!!へ
  
  document.getElementById("flwButton").disabled = true;
  
  function flwClickFunc () {
      if (flwCounter === 5) {
        gameEndFunc();
      } else if (flwClickButtonMessage === "次の花へGO!!!") {
        nextFlw()
      } else if (checkTyping() === true) {
        typingOK()
        console.log(checkTyping());
        console.log(odaiChoice());
        console.log(typingResult);
      } else {
        typingNG()
        console.log(checkTyping());
        console.log(odaiResult);
        console.log(typingResult);
      }
    }

  plusButton.addEventListener('click', flwClickFunc);

//クリア処理関連
const clearImage = document.getElementById("クリア画面");

// //クリア画面無効化
// clearImage.style.opacity = 0;

//クリア画面処理

function clearImageAppear() {
  clearImage.style.zIndex = 999;
  clearImage.style.opacity = 1;
}
