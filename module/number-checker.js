module.export = function (data) {

  if (typeof (data) === "number") {

    return true;

  }
  else {
    console.error("이거 숫자 아님");
    return false;
  }

}