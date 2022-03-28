$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    $("textarea").val(`
      ${$("#nom").val()} ${$("#marque").val()}
      ${$("#marque").val()} ${$("#modele").val()}
      ${$("#marque").val()} ${$("#reference").val()}
      ${$("#nom").val()} ${$("#marque").val()} ${$("#specification").val()}`);
  });

  $("#copier").click(function () {
    $("textarea").select(navigator.clipboard.writeText($("textarea").val()));
  });
});
