//opens non-local links in new window
$('a:not([href^="http://wwb-campus.org"]):not([href^="#"]):not([href^="/"])').attr("target","_blank");
