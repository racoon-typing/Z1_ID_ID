<?php 
const ERROR_URL = 'index.php';
const CLIENT_TOKEN = 'YJG0MTHIYWQTZDVKMI00YZRJLWFMZDUTMGYXYJJKYZA5M2NL';

if ($_SERVER["REQUEST_METHOD"]=="POST") {
    $post = [
            "stream_code" => 'frg9i',
            "client" => [
                'name' => $_POST['name'],
                'phone' => $_POST['phone'],
                'ip' => $_SERVER["HTTP_CF_CONNECTING_IP"] ? $_SERVER["HTTP_CF_CONNECTING_IP"] : ( $_SERVER["HTTP_X_FORWARDED_FOR"] ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"])
            ],
            'sub1' => $_POST["sub1"],
            'sub2' => $_POST["sub2"],
            'sub3' => $_POST["sub3"],
            'sub4' => $_POST["sub4"],
            'sub5' => $_POST["sub5"]
    ];

    $headers = [
        'Content-Type: application/json',
        'Authorization: Bearer ' . CLIENT_TOKEN
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://order.drcash.sh/v1/order");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $body = substr($response, $header_size);
    curl_close ($ch);   


    if ($httpcode != 200) {
        header('Location: '. ERROR_URL);    
    }


}
?>

<html lang="en">

<head>
  
    <meta name="referrer" content="no-referrer">

       <script>
        var qParams = new URLSearchParams(window.location.search);
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', qParams.get('p'));
        fbq('track', 'Lead');
        fbq('track', 'Purchase');
        
        
    </script>
  <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(88395558, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/88395558" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<meta name="referrer" content="no-referrer">


    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <link href="//fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet">
    <style>
body{height:100%;width:100%;margin:0;position:absolute;font-family:Roboto,sans-serif;font-weight:300;color:#141011}h1{text-transform:uppercase}h2{text-transform:uppercase;font-size:25px;margin:0}a{text-decoration:none;color:#141011}ul{padding-inline-start:0}canvas{width:100%;height:100%;position:absolute}#particles-js{position:fixed;width:100%;height:100%;padding:0;background-color:#f2f2f2;background-image:url("");background-repeat:no-repeat;z-index:999}#wrapper{width:100%;height:100%;display:table;position:absolute}#content{display:table-cell;vertical-align:middle}.success-page{width:500px;margin:0 auto;position:relative;box-sizing:border-box;padding:50px 30px;z-index:9999999;text-align:center;background-color:rgba(255,255,255,.5)}.list-info__list{list-style:none}.list-info__item{display:flex;flex-direction:column;text-align:center}.list-info__text{padding-top:10px}.list-info__info{font-size:20px}.success-page__text{padding-bottom:10px}.success-page__message_fail{padding-top:15px}.success-page_back_button{display:flex;align-items:center;justify-content:center;width:50%;height:50px;background-color:#ff6c34;margin:0 auto;border-radius:25px;text-transform:uppercase;transition:.5s ease}.success-page_back_button:hover{background-color:#fab296}.success-page_back_button a{color:#fff;font-weight:300}.success_icon{border-radius:300px;display:table;margin:20px auto 20px auto}.success_icon p{display:table-cell;vertical-align:middle;font-size:50px;color:#fff;width:100px;height:100px;background-color:#549127;border-radius:300px;animation-name:twist;animation-delay:.2s;animation-duration:1s;animation-iteration-count:1;transform:scale(1)}dir,menu,ul{text-align:left}@keyframes twist{0%{transform:scale(0)}60%{transform:scale(1.2)}70%{transform:scale(.9)}85%{transform:scale(1.1)}100%{transform:scale(1)}}@media (max-width:490px){.success-page{width:95%;padding:20px 5px}}
    </style>
</head>

<body>
    <div id="particles-js"></div>
    <div id="wrapper">
        <div id="content">
            <div class="mod success-page">
                <h2 class="success-page__title">
                    Terima kasih atas pesanan Anda!
                </h2>
                <div class="success_icon">
                    <p>&#10003;</p>
                </div>
                <h2>
                    Spesialis kami akan menghubungi Anda sesegera mungkin!
                </h2>
                <p class="success-page__text">
                    Harap periksa apakah informasi yang Anda masukkan sudah benar:
                </p>
                <div class="list-info">
                    <ul class="list-info__list">
                        <li class="list-info__item">
                            <span class="list-info__text">Nama:</span>
                            <span class="list-info__info"><?php echo $_POST['name'] ?></span>
                        </li>
                        <li class="list-info__item">
                            <span class="list-info__text">Nomor telepon:</span>
                            <span class="list-info__info"><?php echo $_POST['phone'] ?></span>
                        </li>
                    </ul>
                </div>
                <p class="success-page__message_fail">
                    <a class="success-page__message_fail__link" href="javascript:history.back()">
                        Jika Anda melakukan kesalahan saat mengisi formulir, harap isi kembali.
                    </a>
                </p>
                <div class="success-page_back_button">
                    <a href='/'>
                        Mengembalikan
                    </a>
                </div>
            </div>
        </div>
    </div>
    <script src="//cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="//threejs.org/examples/js/libs/stats.min.js"></script>
    <script type="text/javascript" src="_assets/jquery.min.js"></script>
    <script src="_assets/main.js"></script>
</body>

</html>