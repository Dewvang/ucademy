// $(document).ready(function(){
//     $("h1").css("color", "red")
// })

// $("h1").css("color", "green");
// $("h1").css("font-size", "5rem");


$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// เปลี่ยนตัวหนังสือ
$("h1").text("Bye");

// ใส่ tag เพิ่มใน tag อีกที
$("button").html("<em>Hey</em>");

// การเลือกแอดทริบิ้ว
$("img").attr("src");
console.log($("img").attr("src"));

// เปลี่ยนสิ่งที่อยู่ในแอดทริบิ้ว
$("a").attr("href", "https://www.yahoo.com")

// การใช้การคลิกแล้วเปลี่ยนสี
// $("h1").click(function () { 
//     $("h1").css("color", "yellow");
// });
// $("button").click(function () { 
//     $("h1").css("color", "purple");
// });


// การ log ข้อมูลที่กดคีย์บอร์ด
// $("input").keypress(function (event) { 
//     console.log(event.key);
// });
$(document).keypress(function (event) { 
    console.log(event.key);
    $("h1").text(event.key);
});
// $("body").keypress(function (event) { 
//     console.log("event.key");
//     $("h1").text(event.key);
// });


// เลื่อนเม้าผ่านแล้วเปลี่ยนสี
$("h1").on("mouseover", function () {
    $("h1").css("color", "black");
});

// เพิ่มโค๊ดบันทัดรอบๆ h1
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");


// อนิเมชั่น
// $("button").click(function () { 
//     $("h1").slideToggle(); 
//     // or .show .hide toggle fideIn fadeOut fadeToggle slideUp slidedown 
// });

$("button").on("click", function() { 
    $("h1").slideUp().slideDown().animate({opacity: 0.5}, 500);
});