// function printDiv1() {
//   var printContents = document.getElementById('teaching-ideas').innerHTML;
//   var originalContents = document.body.innerHTML;
//   document.body.innerHTML = printContents;
//   window.print();
//   document.body.innerHTML = originalContents;
//    }

 function printDivTeacingIdeas()
  {
    var myWindow=window.open('','','width=600,height=700, left=100');
    var printContents = document.getElementById('teaching-ideas-content').innerHTML;
     myWindow.document.write(printContents);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();

  }
  function printDivLiterature()
  {
    var myWindow=window.open('','','width=600,height=700, left=100');
    var printContents = document.getElementById('literature').innerHTML;
     myWindow.document.write(printContents);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();

  }
  function printDivBios()
  {
    var myWindow=window.open('','','width=600,height=700, left=100');
    var printContents = document.getElementById('bios').innerHTML;
     myWindow.document.write(printContents);
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();

  }